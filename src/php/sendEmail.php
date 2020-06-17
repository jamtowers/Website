<?php

    $spamStatus = json_decode(file_get_contents("spamStatus.json"));

    $oldStatus = $spamStatus->time < time() - 3600;

    // If it hasn't been longer then an hour since the last check
    if(!$oldStatus) {
        // If there have been more then 5 hits
        if($spamStatus->hits > 4) {
            http_response_code(429);
            exit('Too many requests recived, try again in an hour');
        }
    }
    else {
        // when status is old, reset spamStatus
        $spamStatus->time = time();
        $spamStatus->hits = 0;
    }

    // If not post request
    if ($_SERVER["REQUEST_METHOD"] != "POST") {
        http_response_code(405);
        exit();
    }
    // Takes raw data from the request
    $json = file_get_contents('php://input');

    // Converts it into a PHP object
    $data = json_decode($json);
    
    // If any post inputs are missing
    if(empty($data->name) || empty($data->email) || empty($data->content)) {
        http_response_code(400);
        exit('Missing Required Value');
    }
     
    // parse name
    $name = trim(htmlspecialchars($data->name));
    if(strlen($name) > 50 || strlen($name) < 1) {
        http_response_code(400);
        exit('Invalid Name');
    }

    // parse email
    $email = trim($data->email);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if ($email === false) {
        http_response_code(400);
        exit('Invalid Email');
    }
    
    // parse subject
    $subject = trim(htmlspecialchars($data->subject));
    if(strlen($subject) > 50) {
        http_response_code(400);
        exit('Invalid Name');
    }
    if(strlen($subject) == 0) {
        $subject="Contact Page Message";
    }

    //parase content
    $content = trim(htmlspecialchars($data->content));
    if(strlen($content) < 1) {
        http_response_code(400);
        exit('Invalid Message Content');
    }

    $from = $name." <".$email.">";

    // Construct email
    $mailheader = "From: ".$from."\r\n";
    $mailheader .= "Reply-To: ".$from."\r\n";
    $mailheader .= "Content-type: text; charset=iso-8859-1\r\n";
    $mailheader .= "X-Mailer: PHP/".phpversion();

    $mailBody = "Name: ".$name."\n";
    $mailBody .= "Email: ".$email."\n";
    $mailBody .= $content;

    // Send email
    if(mail('fake@email.com', $subject, $mailBody, $mailheader)) {
        $spamStatus->hits++;
        $json = json_encode($spamStatus);
        file_put_contents("spamStatus.json", $json);
        exit("success");
    }
    else {
        http_response_code(500);
        exit('Unable to send message, Please try again later');
    }

?>

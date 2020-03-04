import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MessageService } from './message.service';
import { HttpEventType } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  constructor(private titleService: Title, private messageService: MessageService, private snackBar: MatSnackBar) { }

  loading: boolean = false;
  error: string = '';
  message: string = '';

  ngOnInit() {
    this.titleService.setTitle( "James Towers - Contact" );
  }

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    subject: new FormControl('', [
      Validators.maxLength(50)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000)
    ])
  });

  get name() { return this.contactForm.get('name'); }
  
  get subject() { return this.contactForm.get('subject'); }
  
  get email() { return this.contactForm.get('email'); }
  
  get content() { return this.contactForm.get('content'); }

  onSubmit() {
    //show loading indicator
    this.loading = true;
    //clear error message if one exists
    this.error = '';

    //If sending message takes longer then 5 seconds, display message
    var longLoadTimeout = setTimeout(() => {
      this.message = "Your message is still sending! The server can take some time to send messages if it hasn't for a while, give it a moment to get going."; 
    }, 5000);

    //Send message request
    const request = this.messageService.sendMessage(this.contactForm.value).subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log("Uploading Message");
          break;

        case HttpEventType.ResponseHeader:
          console.log("Receving Response");
          break;
    
        case HttpEventType.Response:
          console.log("Done!");
          this.loading = false;
          this.snackBar.open("Message Sent!", null, {
            duration: 5000
          });
          break;
      }
    }, error => { // on request error
      console.error(error.message);
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error
        this.error = error.message;
      } else {
        //server error
        switch(error.status){
          case 429:
            this.error = "Too many requests from this address, please try again in an hour";
            break;
          case 500:
            this.error = "Server can't seem to send the message at the moment, Please try again later";
            break;
          default:
            this.error = "The server experienced an unexpected error, Please try again later"
            break;
        }
      }
    }, () => { //cleanup after requrest is complete
      request.unsubscribe();
      clearTimeout(longLoadTimeout);
      this.message = '';
    })
  }
}

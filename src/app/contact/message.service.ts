import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  public sendMessage(message: Message) : Observable<HttpEvent<any>> {
    return this.http.post('https://jamestowers.azurewebsites.net/sendmail', message,
    { //http options
      responseType: "blob",
      reportProgress: true,
      observe: "events",
      headers: 
        new HttpHeaders(
          { 'Content-Type': 'application/json' }
        )
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Observable } from 'rxjs';

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

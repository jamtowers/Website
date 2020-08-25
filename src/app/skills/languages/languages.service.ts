import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LanguageSection } from './language';

@Injectable({
  providedIn: 'any'
})
export class LanguagesService {
  languagesUrl = 'assets/languages.json';

  constructor(private http: HttpClient) { }

  getSections(): Observable<LanguageSection[]>  {
    return this.http.get<LanguageSection[]>(this.languagesUrl);
  }
}

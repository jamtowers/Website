import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Framework } from './framework';

@Injectable({
  providedIn: 'any'
})
export class FrameworksService {
  frameworksUrl = 'assets/frameworks.json';

  constructor(private http: HttpClient) { }

  getFrameworks(): Observable<Framework[]> {
    return this.http.get<Framework[]>(this.frameworksUrl);
  }
}

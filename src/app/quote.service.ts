import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quotesUrl = 'api/quotes';

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quotesUrl);
  }

  constructor(
    private http: HttpClient) { }
}

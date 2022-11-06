import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QUOTES } from './mock-quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  getQuotes(): Quote[] {
    return QUOTES;
  }

  constructor() { }
}

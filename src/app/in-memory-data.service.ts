import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const quotes = [
      { id: 1, text: 'this is a quote', source: 'just trust me'},
      { id: 2, text: 'any number with a 7 in it is made up',
        source: 'common sense'},
      { id: 3, text: 'i hope ur having a lovely day',
        source: 'reyna'}
    ];
    return {quotes};
  }

  genId(quotes: Quote[]): number {
    return quotes.length > 0 ? Math.max(...quotes.map(quote => quote.id)) +
                               1 : 1;
  }

  constructor() { }
}

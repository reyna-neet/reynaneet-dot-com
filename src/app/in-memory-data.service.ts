import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const quotes = [
      { id: 1, text: 'Though with their high wrongs I am struck to the quick, yet, with my nobler reason, \'gainst my fury do I take part: the rarer action is in virtue than in vengeance.',
        source: 'Prospero, The Tempest'},
      { id: 2, text: 'Are zombies possible? They\'re not just possible, they\'re actual. We\'re all zombies. (It would be an act of desperate intellectual dishonesty to quote this assertion out of context!)', 
        source: 'Daniel Dennett, Consciousness Explained'},
      { id: 3, text: 'His death did not diminish life. Nor did it diminish him. He is there— there, not here! Here is nothing, dust and shadows. There, he is the earth and sunlight, the leaves of trees, the eagle\'s flight. He is alive.',
        source: 'Ged, The Farthest Shore'}
    ];
    return {quotes};
  }

  genId(quotes: Quote[]): number {
    return quotes.length > 0 ? Math.max(...quotes.map(quote => quote.id)) +
                               1 : 1;
  }

  constructor() { }
}

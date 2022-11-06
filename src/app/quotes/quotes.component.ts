import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [];
  displayQuote = {"text":"text you shouldn't see", 
                  "source":"code's gotta compile somehow"};
  
  getQuotes(): void {
    this.quotes = this.quoteService.getQuotes();
    this.displayQuote = this.quotes[0];
  }

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

}

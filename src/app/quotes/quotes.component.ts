import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  QUOTE_CHANGE_DELAY = 10000;

  quotes: Quote[] = [];
  displayQuoteIndex = 0;
  quoteTimer: Subscription = interval(this.QUOTE_CHANGE_DELAY)
                             .subscribe(val => this.nextQuote());
  
  getQuotes(): void {
    this.quotes = this.quoteService.getQuotes();
  }

  nextQuote(): void {
    if (this.displayQuoteIndex == this.quotes.length) {
      this.displayQuoteIndex = 0;
    }
    else {
      this.displayQuoteIndex++;
    }
  }

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  ngOnDestroy(): void {
    this.quoteTimer.unsubscribe();
  }

}

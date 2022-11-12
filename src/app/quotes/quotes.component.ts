import { Component, OnInit } from '@angular/core';
import { AnimationEvent, animate, transition, 
         trigger, state, style } from '@angular/animations';
import { interval, Subscription } from 'rxjs';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  animations: [
    trigger('fadeAndReturn', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('visible => invisible', [
        animate(1000)
      ]),
      transition('invisible => visible', [
        animate(1000)
      ]),
    ]),
  ],
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})

export class QuotesComponent implements OnInit {
  QUOTE_CHANGE_DELAY = 10000;
  ANIMATION_LENGTH = 1000;

  quotes: Quote[] = [];
  displayQuoteIndex = 0;
  isVisible = true;
  quoteTimer: Subscription = interval(this.QUOTE_CHANGE_DELAY)
                             .subscribe(val => this.quoteFade());
  
  getQuotes(): void {
    this.quotes = this.quoteService.getQuotes();
  }

  quoteFade(): void {
    this.isVisible = false;
  }

  onQuoteFadeOut(event: AnimationEvent) {
    if (!this.isVisible) {
      if (this.displayQuoteIndex == this.quotes.length-1) {
        this.displayQuoteIndex = 0;
      }
      else {
        this.displayQuoteIndex++;
      }
      this.isVisible = true;
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

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
      state('void', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('void => visible', [
        animate(1000)
      ]),
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

  quotes: Quote[] = [];
  displayQuoteIndex = 0;
  isVisible = true;
  quoteTimer: Subscription = {} as Subscription;
    
  fetchQuotes(): void {
    this.quoteService.getQuotes()
        .subscribe(quotes => this.quotes = quotes,
                  err => console.error('Error in Quotes component'),
                  () => this.startTimer());
  }

  startTimer(): void {
    this.isVisible = true;
    this.quoteTimer = interval(this.QUOTE_CHANGE_DELAY)
                      .subscribe(val => this.quoteFade());
  }

  quoteFade(): void {
    this.isVisible = !this.isVisible;
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
    this.fetchQuotes();
  }

  ngOnDestroy(): void {
    this.quoteTimer.unsubscribe();
  }

}

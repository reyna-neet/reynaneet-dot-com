import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from '../mock-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  
  displayQuote = QUOTES[0];

  constructor() { }

  ngOnInit(): void {
  }

}

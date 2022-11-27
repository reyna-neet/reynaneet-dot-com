import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBlockComponent } from './title-block/title-block.component';
import { QuotesComponent } from './quotes/quotes.component';
import { InMemoryDataService } from './in-memory-data.service';
import { NavigationListComponent } from './navigation-list/navigation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBlockComponent,
    QuotesComponent,
    NavigationListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

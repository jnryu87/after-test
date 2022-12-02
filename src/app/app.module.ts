import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AverageRatingComponent } from './home/average-rating/average-rating.component';
import { HomeComponent } from './home/home.component';
import { RatingListComponent } from './home/rating-list/rating-list.component';
import { RatingComponent } from './home/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RatingComponent,
    AverageRatingComponent,
    RatingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

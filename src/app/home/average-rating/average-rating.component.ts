import { Component, Input, OnInit } from '@angular/core';
import { MAX_RATE, Rating } from '../rating.model';

@Component({
  selector: 'app-average-rating',
  template: `
    <span *ngFor="let _ of [].constructor(averageRate)">&#9733;</span>
    <span *ngFor="let _ of [].constructor(maxRate - averageRate)">&#9734;</span>
  `
})
export class AverageRatingComponent implements OnInit {

  @Input()
  public ratings: Rating[];

  public averageRate: number;
  public maxRate = MAX_RATE;

  public constructor() {}

  public ngOnInit(): void {
    this.averageRate = this.ratings.reduce((a: number, b: Rating) => a + b.rate, 0) / this.ratings.length;
  }
}

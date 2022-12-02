import { Component, Input } from '@angular/core';
import { Rating } from '../rating.model';

@Component({
  selector: 'app-rating-list',
  template: `
    <app-average-rating [ratings]="ratings"></app-average-rating>
    <div *ngFor="let rating of ratings">
      <app-rating [name]="rating.name" [content]="rating.content" [rate]="rating.rate"></app-rating>
    </div>
  `
})
export class RatingListComponent {

  @Input()
  public ratings: Rating[];

  public constructor() {}
}

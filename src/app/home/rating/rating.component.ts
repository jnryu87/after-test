import { Component, Input } from '@angular/core';
import { MAX_RATE } from '../rating.model';

@Component({
  selector: 'app-rating',
  template: `
    <span *ngFor="let _ of [].constructor(rate)">&#9733;</span>
    <span *ngFor="let _ of [].constructor(maxRate - rate)">&#9734;</span>
    <h3>{{ name }}</h3>
    <p>{{ content }}</p>
  `
})
export class RatingComponent {

  @Input()
  public name: string;

  @Input()
  public content: string;

  @Input()
  public rate: number;

  public maxRate = MAX_RATE;

  public constructor() {}
}

import { Component } from '@angular/core';
import { Rating } from './rating.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public ratings: Rating[] = [
    { name: 'Jenam', content: 'Some content', rate: 4 },
    { name: 'Ryu', content: 'Some other content', rate: 2},
  ]
}

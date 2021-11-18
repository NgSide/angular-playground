import { Component } from '@angular/core';

@Component({
  selector: 'app-montreal-article-solution',
  templateUrl: './montreal-article-solution.component.html',
  styleUrls: ['./montreal-article-solution.component.scss'],
})
export class MontrealArticleSolutionComponent {
  public pictures: string[] = [
    'https://media.timeout.com/images/105463691/750/422/image.jpg',
    'https://www.marriott.com/content/dam/marriott-leisure/destinations/hero/north-america/canada/montreal/montreal-destination-hero.jpeg',
    'https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx',
  ];
  public legendContent: string =
    'Half Paris, half Brooklyn - is Montréal the perfect city?';
  public legendAuthor: string = 'the telegraph';

  constructor() {}

  getRandomPicture(): string {
    const index = this._getRandomInt(0, this.pictures.length - 1);
    return this.pictures[index];
  }

  private _getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

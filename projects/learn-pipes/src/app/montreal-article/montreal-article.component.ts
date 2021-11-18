import { Component } from '@angular/core';

@Component({
  selector: 'app-montreal-article',
  templateUrl: './montreal-article.component.html',
  styleUrls: ['./montreal-article.component.scss']
})
export class MontrealArticleComponent {

  public pictures: string[] = [
    'https://media.timeout.com/images/105463691/750/422/image.jpg',
    'https://www.marriott.com/content/dam/marriott-leisure/destinations/hero/north-america/canada/montreal/montreal-destination-hero.jpeg',
    'https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx',
  ];
  public legendContent: string =
    'Half Paris, half Brooklyn - is Montréal the perfect city?';
  public legendAuthor: string = 'the telegraph';

  constructor() { }
}
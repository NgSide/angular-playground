import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.scss'],
})
export class AngularPipesComponent implements OnInit {
  browsers$ = of(['Google Chrome', 'Brave', 'Firefox']);
  itemPrice = 5123.5;
  currentDate = Date.now();
  news = {
    title: 'Half Paris, half Brooklyn - is Montréal the perfect city?',
    author: 'The Telegraph',
    date: Date.now(),
  };

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  ngOnInit() {
    const currentDate = this._transformDate(Date.now());
    console.log(`Date actuelle: ${currentDate}`);
  }

  _transformDate(date: string | number | Date) {
    return formatDate(date, 'dd/MM/yyyy', this.locale);
  }
}

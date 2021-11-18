import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordcount',
  templateUrl: './wordcount.component.html',
  styleUrls: ['./wordcount.component.scss'],
})
export class WordcountComponent implements OnInit {
  news = {
    title: 'Half Paris, half Brooklyn. Is Montréal the perfect city?',
    author: 'The Telegraph',
    date: Date.now(),
  };

  constructor() {}

  ngOnInit() {}
}

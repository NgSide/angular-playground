import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordcountComponent } from './wordcount/wordcount.component';
import { WordcountPipe } from './wordcount/wordcount.pipe';

import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { MontrealArticleComponent } from './montreal-article/montreal-article.component';
import { MontrealArticleSolutionComponent } from './montreal-article-solution/montreal-article-solution.component';
import { FromPipe } from './montreal-article-solution/from.pipe';
import { GetRandomElementPipe } from './montreal-article-solution/get-random-element.pipe';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    AngularPipesComponent,
    WordcountComponent,
    MontrealArticleComponent,
    MontrealArticleSolutionComponent,
    WordcountPipe,
    FromPipe,
    GetRandomElementPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

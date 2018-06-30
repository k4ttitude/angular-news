import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';

import { ArticleService } from '../article.service';
import { Article } from '../model/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  public articles: Article[];
  query: string = '';

  sections: String[] = [ 'Home', 'Opinion', 'World', 'National', 'Politics', 'Upshot', 'Nyregion',
                        'Business', 'Technology', 'Science', 'Health', 'Sports', 'Arts', 'Books',
                        'Movies', 'Theater', 'Sundayreview', 'Fashion', 'Tmagazine', 'Food', 'Travel',
                        'Magazine', 'Realestate', 'Automobiles', 'Obituaries', 'Insider' ];
  selectedSection: String;
  private format = 'json';

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    // for Section Article
    this.selectedSection = this.sections[0];
    this.getSectionArticles();

    // for Search
    this.query;
  }

  public getSectionArticles(): void {
    console.log(this.selectedSection);
    this.articleService.getSectionArticles(this.selectedSection.toLowerCase(), this.format)
    .subscribe(_json => {
      this.articles = _json.results;
    });
    // console.log(this.articles);
  }

  public search():void {
    this.getSectionArticles();
    for (var i = 0; i < this.articles.length; i++) {
      let article = this.articles[i];
      let encodedQuery = this.query.replace(/\s+/g, '-');

      if (!article.title.includes(this.query) && !article.abstract.includes(this.query)
            && !article.url.includes(encodedQuery)) {
        this.articles.splice(i, 1); // delete current article from list
        i--;
      }
    }
  }

}

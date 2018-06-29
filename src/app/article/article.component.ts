import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getRequestData().subscribe(_json => {
    	this.articles = _json.results;
    });
    console.log(this.articles);
  }

}

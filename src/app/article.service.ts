import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from './model/article';


@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  
  private api_key = '10fbf3376a6b4b63aae14502dd65fbee';
  private api_section_url = 'https://api.nytimes.com/svc/topstories/v2/';
  private api_search_url = 'https://api.nytimes.com/svc/search/v2/';

  constructor(private _http: Http) { }

  public getSectionArticles(section: String, format: String): Observable<any> {
    // var request_url = this.api_url + this.home_path
    //   + '?api-key=' + this.api_key;

    var request_url = this.api_section_url + section + '.' + format;

    console.log(request_url);

    return this._http.get(request_url, {
        search: { 'api-key': this.api_key }
      }).pipe(
      map((res: Response) => res.json()));
  }

}

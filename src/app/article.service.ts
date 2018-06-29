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

  private api_url = 'https://api.nytimes.com/svc/topstories/v2';
  private home_path = '/home.json';
  private opinion_path = 'opinion.json';

  constructor(private _http: Http) { }

  public getRequestData(): Observable<any> {
    var request_url = this.api_url + this.home_path
      + '?api-key=' + this.api_key;

    console.log(request_url);

    return this._http.get(request_url).pipe(
      map((res: Response) => res.json()));
  }

}

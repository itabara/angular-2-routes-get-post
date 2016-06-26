/**
 * Created by Iulian on 26/06/16.
 */
import {Injectable} from 'angular2/core';
import {Http, Headers} from "angular2/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()

export class MyHttpService{
  constructor(private _http: Http){}

  getPosts(): Observable<any>{
    return this._http.get('http://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

  createPost(post: {title:string, body:string, userID:number}):Observable<any>{
    const body = JSON.stringify(post);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-urlencoded');
    return this._http.post('http://jsonplaceholder.typicode.com/posts', body, {
      headers: headers
    }).map(res =>res.json());
  }
}

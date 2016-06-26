import {Component} from 'angular2/core';
import {MyHttpService} from "./my-http.service";

@Component({
    selector: 'my-app',
    template: `
      <div>
        <div class="input">
          <label for="title">Title</label>
          <input type="text" #title id="title">
        </div>
        <div class="input">
          <label for="body">Title</label>
          <input type="text" #body id="body">
        </div>
        <div class="input">
          <label for="user-id">User ID</label>
          <input type="text" #userId id="user-id">
        </div>
        <button (click)="onPost(title.value, body.value, userId.value)">Post Data</button>
        <button (click)="onGetPosts()">Get All Posts</button>
        <p>Response: {{response | json}}</p>
      </div>
    `,
    providers: [MyHttpService]
})
export class AppComponent {
  response: string;

  constructor(private _httpService: MyHttpService){}

  onGetPosts(){
    this._httpService.getPosts()
      .subscribe(
      response => this.response = response,
      error => console.log(error)
    )
  }

  onPost(title:string, body:string, userId: string){
    this._httpService.createPost({title:title, body:body, userID: +userId})
      .subscribe(
        response => this.response = response,
        error => console.log(error)
      );
  }
}

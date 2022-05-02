import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  // Service used to get data from given URL
  constructor(private httpClient: HttpClient) { }

  jsonDataUrl = 'http://jsonplaceholder.typicode.com';
  postsUrl = '/posts';
  // usersUrl = '/users';
  

  getPostsData() {
    console.log('pegando coisas do backend')
   return this.httpClient.get(this.jsonDataUrl+this.postsUrl);
  }

  // getUsersData(){
  //   return this.httpClient.get(this.jsonDataUrl+this.usersUrl);
  // }
}

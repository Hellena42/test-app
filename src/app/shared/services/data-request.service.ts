import  { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  DataRequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private dataUrl = 'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5';

  constructor(private http: HttpClient) {
    
  }

  getData() {
    return this.http.get(this.dataUrl, this.httpOptions);
  }
}
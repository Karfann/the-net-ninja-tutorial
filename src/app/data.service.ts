import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(
    private http: Http
  ) { }


  fetchData(){
    return this.http.get("https://nn-angular-ae36e.firebaseio.com/.json")
      .map((res) => res.json());
  }


}

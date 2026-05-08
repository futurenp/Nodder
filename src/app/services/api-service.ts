import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  http = HttpClient;
  // get() {
  //   http.get<Config>()
  // }

}

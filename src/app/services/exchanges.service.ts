import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IExchanges} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll():Observable<IExchanges[]> {
    return this.httpClient.get<IExchanges[]>(urls.exchanges)
  }
}

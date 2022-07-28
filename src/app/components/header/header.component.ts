import {Component, OnInit} from '@angular/core';
import {filter, map} from "rxjs";

import {ExchangesService} from "../../services";
import {IExchanges} from "../../interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currency: IExchanges[]

  constructor(private exchangesService: ExchangesService) {
  }

  ngOnInit(): void {
    this.exchangesService.getAll().pipe(
      filter(f => {
        return !!f //перевіряємо чи на запит щось повертається
      }),
      map(value => { //відсортовуємо потрібні валюти
        return value.filter(value1 => value1.cc == "USD" || value1.cc === "EUR")
      })
    ).subscribe(value => {
        this.currency = value
        // console.log(value);
      }
    )
  }

}

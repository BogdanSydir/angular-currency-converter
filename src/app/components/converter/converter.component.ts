import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {IExchanges} from "../../interfaces";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {


  form: FormGroup

  constructor(private fb: FormBuilder) {
    this._createForm()
    this.form = fb.group({
      input1: 0, //за замовчуванням в першому інпуті
      input2: 0,
      select1: 1, //за замовчуванням в першому селекті
      select2: 1,
    })

  }

  @Input()
  current: IExchanges[] | null

  ngOnInit(): void {
  }

  _createForm(): void {

  }

  exchange(input_value: number, inp_to_exchange: string, selector1: string, selector2: string): void {
    this.form.controls[inp_to_exchange].setValue(input_value * (+this.form.controls[selector1].value / +this.form.controls[selector2].value))
    //this.form.controls[inp_id] - визначаємо в який інпут будуть вноситись зміни
    //input_value - занесене значення, this.form.controls[selector*].value - ціна валюти по відношенню до гривні

    // console.log(this.current);
    // console.log(this.form.value)
  }

}

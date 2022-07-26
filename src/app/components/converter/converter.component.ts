import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder,FormGroup} from "@angular/forms";

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
      value1: 0,
      value2: 0,
      select1: 1,
      select2: 1
    })

  }

  @Input()
  current: IExchanges[] | null

  ngOnInit(): void {
  }

  _createForm(): void {

  }

  exchange(input_number: number, inp: string, sel1: string,sel2: string): void {
    this.form.controls[inp].setValue(input_number*( +this.form.controls[sel1].value / +this.form.controls[sel2].value))
    // console.log(this.current);
    console.log(this.form.value)
  }

}

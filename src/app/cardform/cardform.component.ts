import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Dateformat } from '../dateformat';
@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})
export class CardformComponent implements OnInit {


  cardForm = new FormGroup({ // creates instance of various fields
    name: new FormControl('name', [
      Validators.required,
      Validators.minLength(3), //min checks minimum number
      Validators.maxLength(10)
    ]), // need to give default value

    cardnumber: new FormControl('1234123412341234', [Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16)]),

    expiry: new Dateformat('MM/YY', [Validators.required,
    Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),

    security:new FormControl('XXX',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
      // Validators.pattern(/\d{3}$/)
    ])
  })

  constructor() {
    console.log(this.cardForm.controls.name.errors);
  }
  ngOnInit(): void {
  }

  onSubmit() {
    
    alert('You\'re card is submitted!')
    this.onResetSubmit()
  }
  onResetSubmit(){
    console.log('reset');
    this.cardForm.reset()
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  tareaForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.tareaForm=new FormGroup({
      desc: new FormControl(null, Validators.required)
    });
  }

  saveTarea(){
    console.log('saving...')
  }

}

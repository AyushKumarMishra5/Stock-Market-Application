import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  username = '';
  password = '';
  cnf = '';
  phone = '';
  mail = '';

  constructor() {}
  async onSubmit()
  {
    if(this.username == " " && this.username.length <5){
    }
  }
}

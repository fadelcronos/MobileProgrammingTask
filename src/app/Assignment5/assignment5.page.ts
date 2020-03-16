import { Component } from '@angular/core';
import {personName} from './name';
@Component({
  selector: 'app-assignment4',
  templateUrl: 'assignment4.page.html',
  styleUrls: ['assignment4.page.scss'],
})
export class Ass4 {

  personName = personName;
  addName(input: string){
    if(input){
      this.personName.push(input);
    }
  }
  // constructor() {}

}

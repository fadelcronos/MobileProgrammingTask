import { Component } from '@angular/core';
import {personName} from './name';
@Component({
  selector: 'app-assignment2',
  templateUrl: 'assignment2.page.html',
  styleUrls: ['assignment2.page.scss'],
})
export class Ass2 {

  personName = personName;
  addName(input: string){
    if(input){
      this.personName.push(input);
    }
  }
  // constructor() {}

}

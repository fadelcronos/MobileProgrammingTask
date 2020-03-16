import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: 'assignment3.page.html',
  styleUrls: ['assignment3.page.scss'],
})
export class Ass3 {
  addName(input: string){
    if(input){
      // this.personName.push(input);
      console.log(input);
    }
  }

}

import { Component } from '@angular/core';

import { ClickHistoryService } from './services/click-history.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
private  title1: any = null;
private  title2: any = null;

private arr1 = null;
private arr2 = null;

private arr = [
  {
    'name': 'name1',
    'arr': [
      'qwe1',
      'qwe2'
    ]
  },
  {
    'name': 'name2',
    'arr': [
      'qwe3',
      'qwe4'
    ]
  },
];

constructor(private clickHistoryService: ClickHistoryService){
  console.log(clickHistoryService.namesList);
}


}

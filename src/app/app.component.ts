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

  private arr_test: string[] = [
    'Пункт1',
    'Пункт2',
    'Пункт3',
    'Пункт4',
    'Пункт5',
  ];
  private selectedArr: string[] = [];

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

 private nameListGroupMuscles = [
    {
      'name_group_muscles' : 'Грудные',
      'nameListExercises' : [
        'Жим гантелей на горизонтальной скамье',
        'Сведение рук в кроссовере на верхнюю часть груди'
      ]
    },
    {
      'name_group_muscles' : 'Бицепс',
      'nameListExercises' : [
        'Молотки',
        'Двойное сгибание рук стоя',
        'Сгибание рук стоя в наклоне по очереди'
      ]
    },
    {
      'name_group_muscles' : 'Трицепс',
      'nameListExercises' : [
        'Французский жым',
        'Поднятие гантели из-за головы',
        'Кикбэк'
      ]
    },
  ]; 
  

constructor(private clickHistoryService: ClickHistoryService){
  console.log(clickHistoryService.namesList);
}

  rows(): undefined[]{
    let arr: undefined[] = [];

    if(this.selectedArr.length == 0){
      arr = new Array(1);
    } else if(this.selectedArr.length < this.arr_test.length){
      arr = new Array(this.selectedArr.length + 1);
    }else{
      arr = new Array(this.selectedArr.length);
    }

    return arr;
  }

  possibleSelect(itemFromSelect: string = ''): string[]{
    let arr_test: string[] = [];

    for(let item of this.arr_test){
      if(itemFromSelect != item){
        if(this.selectedArr.indexOf(item) ==- 1){
          arr_test.push(item);
        }
      } else {
        arr_test.push(item);
      }

    }

    return arr_test;
  }

}

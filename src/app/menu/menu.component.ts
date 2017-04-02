import { Component, OnInit } from '@angular/core';

import { ClickHistoryService } from './../services/click-history.service'

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuArr: Array<Object> = [
      {name: 'О нас', link: 'about'},
      {name: 'Контакты', link: 'contacts'},
      {name: 'Товары', link: 'goods'},
      {name: 'Мы на карте', link: 'map'},
  ];

  constructor(private clickHistoryService: ClickHistoryService) { }

  ngOnInit() {
  }

    saveLink(name: string): void{
      this.clickHistoryService.saveLink(name);
    }

}

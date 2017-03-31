import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

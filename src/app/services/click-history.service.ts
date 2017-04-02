import { Injectable } from '@angular/core';

@Injectable()
export class ClickHistoryService {

  public namesList: string[] = ['qwe', 'asdf'];

  constructor() { }

  saveLink(name: string): void{
    this.namesList.push(name);
  }
}

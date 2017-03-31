import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'count:';

  count: number = 0;

  left: number = 100;

  divLeft(){
    return {
      height: '50px',
      width: '50px',
      background: '#434',
      position: 'absolute',
      left: this.left + 'px',
      top: '150px'
    };
  }

  getName(){
    return 'привет Серега';
  }

  buttonClick(){
    this.left++;
  }


}

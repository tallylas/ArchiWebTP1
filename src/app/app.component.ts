import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hassoun-tali-exo1';

  public color:string ='';

  public setColor(color:string) {
    this.color=color;
  }

}

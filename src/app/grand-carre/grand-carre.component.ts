import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grand-carre',
  templateUrl: './grand-carre.component.html',
  styleUrls: ['./grand-carre.component.scss']
})
export class GrandCarreComponent implements OnInit {

  @Output()backgroundColor=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public getColorGrandCarre(colorGrandCarre:string){
    this.backgroundColor.emit(colorGrandCarre);
  }

}

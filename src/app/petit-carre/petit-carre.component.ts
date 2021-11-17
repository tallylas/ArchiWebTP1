import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-petit-carre',
  templateUrl: './petit-carre.component.html',
  styleUrls: ['./petit-carre.component.scss']
})
export class PetitCarreComponent implements OnInit {

  @Input()color:string ='';

  @Output()colorGrandCarre=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}

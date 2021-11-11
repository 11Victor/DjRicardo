import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    Aos.init();
  }

}

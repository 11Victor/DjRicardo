import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { environment } from 'src/environments/environment.prod';
import { Eventos } from '../model/Eventos';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: Eventos = new Eventos()
  listaEventos: Eventos[]

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0),
    Aos.init(),
    this.authService.refreshToken(),
    this.getAllEventos()
  }



  getAllEventos(){
    this.authService.getAllEventos().subscribe((resp: Eventos[]) => {
      this.listaEventos = resp
    })
  }





  logado() {
    let ok: boolean = false;

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { environment } from 'src/environments/environment.prod';
import { Eventos } from '../model/Eventos';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  eventos: Eventos = new Eventos()
  listaEventos: Eventos[]


  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(){
    Aos.init();
    window.scroll(0,0)
    this.authService.refreshToken()

    if(environment.token == ''){
      this.router.navigate(['/inicio'])
      alert('Sua sessão expirou, realize o Login novamente!')
    }
  }


  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }


  cadastrarEvento(){

    this.usuario.id = this.idUsuario
    this.eventos.usuario = this.usuario

    if(this.eventos.foto == null || this.eventos.foto == ''){
      this.eventos.foto = 'https://i.imgur.com/01N9XGP.jpg'
    }

    this.authService.cadastrarEvento(this.eventos).subscribe((resp: Eventos) => {
      this.eventos = resp
      alert('Evento cadastrado com sucesso!')
      this.eventos = new Eventos() 
    })

  }



}

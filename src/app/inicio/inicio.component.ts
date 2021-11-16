import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(){
    Aos.init(),
    window.scroll(0,0),
    this.authService.refreshToken()
  }

  entrar() {
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
      

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id

      
      this.router.navigate(['/adm'])
      
    }, erro => {
      if(erro.status == 401 || 500){
        alert('Usuario ou senha estão incorretos')
      }
    })
  }
  

}

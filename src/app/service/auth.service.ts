import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Eventos } from '../model/Eventos';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    }
  }

  

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://djricardo.herokuapp.com/usuarios/logar', usuarioLogin)
 }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://djricardo.herokuapp.com/usuarios/cadastrar', usuario) 
  }

  getAllUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://djricardo.herokuapp.com/usuarios/usuarios/all', this.token)
  }

  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://djricardo.herokuapp.com/usuarios/${id}`, this.token)
  }

  putUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put <Usuario>('https://djricardo.herokuapp.com/usuarios/atualizar', usuario, this.token)
  }




  getAllEventos(): Observable<Eventos[]>{
    return this.http.get<Eventos[]>('https://djricardo.herokuapp.com/eventos', this.token)
  }

  cadastrarEvento(eventos: Eventos): Observable<Eventos>{
    return this.http.post<Eventos>('https://djricardo.herokuapp.com/eventos', eventos, this.token) 
  }















  logado() {
    let ok: boolean = false;

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
  
}

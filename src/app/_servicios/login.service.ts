import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SingInRequest } from '../_modelo/SingInRequest';
import { JwtAuthenticationResponse } from '../_modelo/JwtAuthenticationResponse';
import { entorno } from '../_enviroment/emtorno';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }

  autenticar(datos:SingInRequest) {
    return this.http.post<JwtAuthenticationResponse>
    (`${entorno.HOSTNAME}/auth/signin`, datos)
  }

  estasLogeado() {
    let token = sessionStorage.getItem(entorno.TOKEN_NAME);
    return token != null;
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}

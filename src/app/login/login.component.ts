import { Component } from '@angular/core';
import { JwtAuthenticationResponse } from '../_modelo/JwtAuthenticationResponse';
import { SingInRequest } from '../_modelo/SingInRequest';
import { LoginService } from '../_servicios/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { entorno } from '../_enviroment/emtorno';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  respuesta:JwtAuthenticationResponse = {
    token:""
  }

  datos:SingInRequest={
    email:"",
    password:""
  }

  constructor(private servicio:LoginService, private router:Router) {}

  autenticar() {
    this.servicio.autenticar(this.datos)
    .subscribe((data) => {
      console.log("token->"+data.token);
      sessionStorage.setItem(entorno.TOKEN_NAME, data.token);

      this.router.navigate(['/contenido'])
    })
  }
}

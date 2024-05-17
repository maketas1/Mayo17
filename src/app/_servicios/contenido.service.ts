import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contenido } from '../_modelo/Contenido';
import { entorno } from '../_enviroment/emtorno';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(private http:HttpClient) { }

  obtenerContenido(): Observable<Contenido> {
    return this.http.get<Contenido>(`${entorno.HOSTNAME}/resource`)
  }
}

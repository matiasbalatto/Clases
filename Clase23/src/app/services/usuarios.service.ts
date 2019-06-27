import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url:string = 'http://localhost:3000';
  url_registrar_usuario=this.url+"usuarios/registro";
  constructor(private http: HttpClient) { }

  crear_usuario(dato){
    return this.http.post(this.url_registrar_usuario,dato)
  }
}

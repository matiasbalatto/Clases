import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
//funcion especial que se ejecuta al principio de todo
//cuando entren a la ruta /productos se muestren todos los productos de una tabla sql
//cual es el modulo que nos permite hacer peticiones al servidor?
//lo primero que se hace cuando se carga el servicio es instanciar el objeto http a traves de httpclient(clase)
url:string="http://localhost:3000";
url_get_all_productos=this.url+"/productos";
 constructor(private http : HttpClient) { }
 
 get_productos(){
    return this.http.get(this.url_get_all_productos);


 }

 insert_productos(){

 }
}

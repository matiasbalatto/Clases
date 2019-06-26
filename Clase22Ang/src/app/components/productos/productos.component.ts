import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
//accedo al servicio (peticion get al servidor y nos da una rta y se almacena dentro del
//metodo del servicio  y lo exportamos/hacemospublico con el return)
  constructor(private  productos:ProductosService) { 
    //dentro del objeto productos puedo acceder al metodo get_productos
    //cargar la informacion dentro del constructor
    this.productos.get_productos().subscribe(data =>{
      //contiene la respuesta de la peticion que hice en el servicio
      //data se carga cuando finaliza la respuesta por parte de la ruta y el verbo http definido
      //en el servicio
      console.log(data);
    })
  }

  ngOnInit() {
    //cargar la informacion dentro del init
  }

}

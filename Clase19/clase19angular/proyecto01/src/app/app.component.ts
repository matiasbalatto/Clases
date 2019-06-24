import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto01';
  contador: number=0;
  contador2clicks: number=0;
  
  nombre_usuario: 'franco';
  apellido_usuario :"di leo";


  sumar_numerito(){
    this.contador++;
  }

  restar_numerito(){
    if (this.contador<=0){
      this.contador=0;
    } else{
      this.contador--;
    }
    
  }

  doubleClick(){
    this.contador2clicks++;
  }
}




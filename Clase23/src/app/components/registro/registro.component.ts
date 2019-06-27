import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormControl} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro : FormGroup;
  constructor(private usuarios: UsuariosService) { 

    this.registro=new FormGroup({
      'nombre' : new FormControl('',[Validators.required,Validators.minLength(6)]),
      'apellido' : new FormControl('',[Validators.required,Validators.minLength(6)]),
      'mail' : new FormControl('',[Validators.required,Validators.minLength(6)]),
      'password' : new FormControl('',[Validators.required,Validators.minLength(6)])

    })

  
  }
      
  ngOnInit() {
  }

  registrar_usuario(){
    // console.log(this.registro);
    // console.log(this.registro.value);
    this.usuarios.crear_usuario(this.registro.value).subscribe(info =>{
      console.log(info);
    })

  }


}

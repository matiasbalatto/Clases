import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from 'src/app/components/productos/productos.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
//siempre que se defina un componente, importarlo
const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

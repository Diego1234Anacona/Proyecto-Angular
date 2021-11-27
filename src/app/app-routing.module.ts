import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraDeNavegacionComponent } from './components/barra-de-navegacion/barra-de-navegacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
  { path: '', component: ContactoComponent },
  { path: 'curriculum', component: HojaDeVidaComponent },
  { path: '', component: BarraDeNavegacionComponent},
  { path: 'productos', component: ProductosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

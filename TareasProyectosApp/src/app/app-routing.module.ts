import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch:'full' },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasPageModule' },
  { path: 'proyectos', loadChildren: './proyectos/proyectos.module#ProyectosPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

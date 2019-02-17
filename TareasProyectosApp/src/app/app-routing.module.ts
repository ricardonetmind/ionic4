import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasPageModule' },
  { path: 'list', loadChildren: './tareas/list/list.module#ListPageModule' },
  { path: 'proyectos', loadChildren: './proyectos/proyectos.module#ProyectosPageModule' },
  { path: 'detail', loadChildren: './proyectos/detail/detail.module#DetailPageModule' },
  { path: 'new', loadChildren: './proyectos/new/new.module#NewPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

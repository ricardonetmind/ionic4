import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Tarea } from '../modelos/tarea';
import { TareasService } from '../services/tareas.service';

@Injectable()
export class TareasResolver implements Resolve<Observable<Tarea[]>> {

  constructor(
    private tareasService: TareasService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Tarea[]> {
    return this.tareasService.getTareasFromApi();
  }
}

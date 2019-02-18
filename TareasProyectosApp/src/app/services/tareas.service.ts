import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tarea';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
//import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  
  private _tareas:Tarea[]=[
    new Tarea(1, 'montar repositorio', 10, 1),
    new Tarea(2, 'diseñar app', 20, 1),
    new Tarea(3, 'probar', 2, 2),
    new Tarea(4, 'entregar', 3, 2),
  ];

  constructor(/* private _http:HttpClient */) { }

  getTareas():Tarea[]{
    return this._tareas;
  }

  getTareaByTid(tid:number):Tarea{
    return this._tareas.find( (aT:Tarea)=>{
      return aT.tid==tid;
    });
  }
  
/* 
  getTareasFromApi():Observable<Tarea[]>{
    const options={
      headers:{
        'Accept':'application/json',
        'token':'hasdfkjhasfdkjhasfkjdaskf'
      }
    };

    return this._http.get<Tarea[]>(`${environment.API_URL}/tareas`,options)
    .pipe(
      tap(data=>{
        this._tareas=data;
        localStorage.setItem('tareas',JSON.stringify(this._tareas));
      }),
      catchError(this.handleError)
    );
  }

  handleError(error){
    console.error(error);
    return throwError(error);
  }

  getTareasByProyecto(pid:number):Tarea[]{
    return this._tareas.filter((aT:Tarea)=>{
      return aT.proyecto==pid;
    })
  }
  


  addTarea(newtarea:Tarea):Tarea{
    newtarea.tid=new Date().getTime();
    this._tareas.push(newtarea);
    return newtarea;
  }

  addTareaToApi(tareanueva:Tarea):Observable<Tarea>{
    let tareaAEnviar={
      tid:0,
      desc:tareanueva.desc,
      duracion:tareanueva.duracion,
      proyecto:tareanueva.proyecto
    };

    return this._http.post<Tarea>(`${environment.API_URL}/tareas`,tareaAEnviar);
  }

 */}

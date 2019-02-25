import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private _proyectos=[
    new Proyecto(1,'App Android'),
    new Proyecto(2,'App IOs'),
  ];

  constructor(private _http:HttpClient) { }

  getProyectos():Proyecto[]{
    return this._proyectos;
  }

  getProyectosFromAPI():Observable<Proyecto[]>{
    return this._http.get<Proyecto[]>(`${environment.API_URL}/proyectos`);
  }

  getProyectoById(pid:number):Proyecto{
    return this._proyectos.find((aP:Proyecto)=>{return aP.pid==pid;});
  }
}

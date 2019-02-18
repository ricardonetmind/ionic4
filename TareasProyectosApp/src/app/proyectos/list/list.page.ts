import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { Proyecto } from 'src/app/modelos/proyecto';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  proyectos: Proyecto[];
  constructor(private _proyServ: ProyectosService) { }

  ngOnInit() {
    this.proyectos = this._proyServ.getProyectos()
  }

}

import { Component, OnInit } from '@angular/core';

import {TareasService} from '../../services/tareas.service';
import { Tarea } from 'src/app/modelos/tarea';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  tareas:Tarea[];
  constructor(private _tarServ:TareasService) { }

  ngOnInit() {
    this.tareas=this._tarServ.getTareas();
  }

}

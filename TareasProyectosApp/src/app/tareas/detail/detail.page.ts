import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  tarea:Tarea;

  constructor(private _route:ActivatedRoute, private _tarServ:TareasService) { }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      const tid=params['tid'];
      if(tid) this.tarea=this._tarServ.getTareaByTid(tid);
    });

  }

}

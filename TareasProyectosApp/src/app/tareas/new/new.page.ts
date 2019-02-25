import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { Proyecto } from 'src/app/modelos/proyecto';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/services/tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  proyectos: Proyecto[];
  nuevaTareaForm: FormGroup;

  constructor(
    private _proyServ: ProyectosService,
    private _tarServ: TareasService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.nuevaTareaForm = new FormGroup({
      desc: new FormControl(null, Validators.required),
      dur: new FormControl(null, [Validators.min(1), Validators.max(20), Validators.required]),
      proy: new FormControl(null, [Validators.min(1), Validators.required])
    });

    console.log(this.nuevaTareaForm)

    this._proyServ.getProyectosFromAPI().subscribe((proys: Proyecto[]) => {
      this.proyectos = proys;
    });

  }

  guardarTarea() {
    const ntarea = new Tarea(0, this.nuevaTareaForm.value.desc, this.nuevaTareaForm.value.dur, this.nuevaTareaForm.value.proy);

    console.log("ntarea:", ntarea);

    this._tarServ.addTareaToApi(ntarea).subscribe( (tareaGuardada:Tarea)=>{
      console.log(tareaGuardada);
      this.nuevaTareaForm.reset();
      this._router.navigate(['/tareas/list']);
    });

  }

}

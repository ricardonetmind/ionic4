import { Component, OnInit } from '@angular/core';

import { TareasService } from '../../services/tareas.service';
import { Tarea } from 'src/app/modelos/tarea';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  tareas: Tarea[];
  mensajeError: any;

  constructor(private _tarServ: TareasService, public toastController: ToastController) { }

  ngOnInit() {
    console.log('Inicializando...');
  }

  ngOnChange(){
    console.log("cambiando...");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy...");
  } 

  ionViewWillEnter() {
    console.log("ionViewWillEnter...");
    this._tarServ.getTareasFromApi().subscribe((tareasAPI: Tarea[]) => {
      this.tareas = tareasAPI;
    },
      error => {
        console.log(error);
        if (error.status == 404) this.mensajeError = "No existe el servicio";
        else this.mensajeError = "Oooopss...tenemos un problema...";

        this.presentToastWithOptions(this.mensajeError);
      });
  }

  ionViewDidEnter(){
    console.log("ionViewWillleave...");
  }

  ionViewWillLeave(){
    console.log("ionViewWillleave...");
  }

  ionViewDidLeave(){
    console.log("ionViewWillleave...");
  }

  ionViewWillUnload(){
    console.log("ionViewWillleave...");
  }

  async presentToastWithOptions(error: string) {
    const toast = await this.toastController.create({
      message: error,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'OK'
    });
    toast.present();
  }

}

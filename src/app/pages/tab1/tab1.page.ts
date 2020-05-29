import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listadoTareas: Lista[] = [];

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) { 
    this.listadoTareas = deseosService.listas;
  }

  async agregarLista(){
    // console.log("Navigating...");
    // this.router.navigateByUrl("/tabs/tab1/agregar");
    
      const alert = await this.alertCtrl.create({
        header: 'Nueva lista',
        inputs:[
          {
            name:'titulo',
            type:'text',
            placeholder:'Nombre de la lista'
          }
        ],
        buttons: [
          {
            text:'Cancelar',
            role:'cancel',
            handler: () => console.log('Cancelar')

          },
          {
            text:'Crear',
            handler: (data) => {
              if (data.titulo.length === 0) return;
              
              this.deseosService.crearLista(data.titulo);
              return;
            }

          },

        ]
      });
  
      alert.present();
    
  }

}

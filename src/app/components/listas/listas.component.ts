import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;
  @ViewChild( IonList ) ionList: IonList;

  constructor(
    private router: Router,
    public deseosService: DeseosService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  listaSeleccionada(item: Lista){
    if (this.terminada)
      this.router.navigateByUrl(`/tabs/tab2/agregar/${item.id}`);
    else
      this.router.navigateByUrl(`/tabs/tab1/agregar/${item.id}`);
  }

  borrarLista(item: Lista){
    this.deseosService.borrarLista(item);
  }

  async editarLista(item: Lista){

      const alert = await this.alertCtrl.create({
        header: `Editar lista: ${item.titulo}`,
        inputs:[
          {
            name:'titulo',
            type:'text',
            value: item.titulo,
            placeholder:'Nombre de la lista'
          }
        ],
        buttons: [
          {
            text:'Cancelar',
            role:'cancel',
            handler: () => {
              console.log('Cancelar');
              this.ionList.closeSlidingItems();
          }

          },
          {
            text:'Guardar',
            handler: (data) => {
              if (data.titulo.length === 0) return;
              
              item.titulo = data.titulo;
              this.deseosService.guardarStorage();

              this.ionList.closeSlidingItems();
              //this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
              return;
            }

          },

        ]
      });
  
      alert.present();
    
  }

}

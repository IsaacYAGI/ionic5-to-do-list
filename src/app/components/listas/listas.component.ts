import { Component, OnInit, Input } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;
  constructor(
    private router: Router,
    public deseosService: DeseosService
  ) { }

  ngOnInit() {}

  listaSeleccionada(item: Lista){
    if (this.terminada)
      this.router.navigateByUrl(`/tabs/tab2/agregar/${item.id}`);
    else
      this.router.navigateByUrl(`/tabs/tab1/agregar/${item.id}`);
  }

}

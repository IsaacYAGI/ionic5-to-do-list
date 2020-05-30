import { Component, OnInit, Input } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() listadoTareas: Lista[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  listaSeleccionada(item: Lista){
    this.router.navigateByUrl(`/tabs/tab1/agregar/${item.id}`);
  }

}


import { IEvento } from './../../model/IEvento.model';
import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento/evento.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaDeEvento: IEvento[] = [];

  constructor(private eventoService: EventoService) {

  }

  listarEventos():void{
    this.eventoService.listarEventos().subscribe(retorno=>{this.listaDeEvento = retorno});
  }
  ngOnInit(): void {
    this.listarEventos();
  }

}

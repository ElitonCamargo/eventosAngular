import { IEvento } from './../../../model/IEvento.model';
import { EventoService } from './../evento.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaDeEvento: IEvento[] = [];


  constructor(private eventoService: EventoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.listarEventos();
  }

  listarEventos():void{
    this.eventoService.listarEventos().subscribe(retorno=>{this.listaDeEvento = retorno});
  }

  excluirEventos(id:number){
    this.eventoService.excluirEventos(id).subscribe(retorno => {
      this.listarEventos();
      this.eventoService.exibirMensagens(
        'Excluido no sistema',
        'Evento excluido com sucesso',
        'toast-success'
      );
    });
  }
}

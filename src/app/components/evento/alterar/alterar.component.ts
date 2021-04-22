import { IEvento } from './../../../model/IEvento.model';
import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {

  evento: IEvento ={
    nome:null,
    local:null,
    data:null,
    img:null
  };

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.buscarEvendoPoId(id);
  }

  buscarEvendoPoId(id:number):void{
    this.eventoService.buscarEventosPorId(id).subscribe(retorno => {
      this.evento = retorno;
    });
  }

  alterarEvendo():void{
    this.eventoService.alterarEventos(this.evento).subscribe(retorno => {
      this.evento = retorno;
    });
    this.router.navigate(["/eventos"]);
  }
}

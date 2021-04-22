import { IEvento } from './../../../model/IEvento.model';
import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  evento: IEvento = {
    nome: null,
    local: null,
    data: null,
    img: 'https://atasouthport.com/wp-content/uploads/2017/04/default-image.jpg'
  }

  constructor(private eventoService: EventoService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarEvendo():void{
    this.eventoService.cadastrarEventos(this.evento).subscribe(retorno => {
      this.evento = retorno;
      this.eventoService.exibirMensagens(
        'Cadastro no sistema',
        `${this.evento.nome} foi cadastrado com sucesso. ID: ${this.evento.id}`,
        'toast-success'
      );
    });
  }

  aoFecharModal(){
    window.location.reload();
  }
}

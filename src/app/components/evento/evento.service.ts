import { environment } from './../../../environments/environment';
import { IEvento } from './../../model/IEvento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, EmptyError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private URL: string = environment.URL;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  listarEventos(): Observable<IEvento[]>{
    return this.http.get<IEvento[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(error=>this.exibirErro(error))
    );
  }

  buscarEventosPorId(id: number): Observable<IEvento>{
    return this.http.get<IEvento>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(error=>this.exibirErro(error))
    );
  }

  cadastrarEventos(evento: IEvento): Observable<IEvento>{
    return this.http.post<IEvento>(this.URL, evento).pipe(
      map(retorno => retorno),
      catchError(error=>this.exibirErro(error))
    );
  }

  alterarEventos(evento: IEvento): Observable<IEvento>{
    return this.http.put<IEvento>(`${this.URL}/${evento.id}`, evento).pipe(
      map(retorno => retorno),
      catchError(error=>this.exibirErro(error))
    );
  }

  excluirEventos(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(error=>this.exibirErro(error))
    );
  }

  exibirErro(e: any):Observable<any>{
    this.exibirMensagens('ERRO!!',`Não foi possível realizar a operação: ${e.message}`,'toast-error');
    return EMPTY;
  }


  exibirMensagens(titulo: string, mensagem: string, tipo: string): void{
    this.toastr.show(mensagem, titulo,{closeButton:true, progressBar: true},tipo);
  }

}

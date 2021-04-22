import { IEvento } from './../../model/IEvento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  //private URL: string = 'http://localhost:3000/eventos';
  private URL: string = 'https://my-json-server.typicode.com/ElitonCamargo/backend-jsonserver/eventos';

  constructor(private http: HttpClient) { }

  listarEventos(): Observable<IEvento[]>{
    return this.http.get<IEvento[]>(this.URL);
  }

  buscarEventosPorId(id: number): Observable<IEvento>{
    return this.http.get<IEvento>(`${this.URL}/${id}`);
  }

  cadastrarEventos(evento: IEvento): Observable<IEvento>{
    return this.http.post<IEvento>(this.URL, evento);
  }

  alterarEventos(evento: IEvento): Observable<IEvento>{
    return this.http.put<IEvento>(`${this.URL}/${evento.id}`, evento);
  }

  excluirEventos(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`);
  }
}
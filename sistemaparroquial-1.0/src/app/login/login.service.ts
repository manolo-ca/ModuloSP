import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from './login';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private url: string = environment.URL_INVENTARIO + "/usuario";
  constructor(private http: HttpClient) {
  }

  buscarporNombre(nombre:string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/listar/usuario/${nombre}`);
  }
}
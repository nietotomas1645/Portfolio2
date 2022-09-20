import { Injectable } from '@angular/core';

import { PROYECTOS } from '../mocks/proyecto.mock';
import { IProyecto } from '../models/proyecto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  listaProyectos: IProyecto[]= [];
  constructor() { }

  obtenerProyectos(): IProyecto[]{
    return PROYECTOS;
  }



}

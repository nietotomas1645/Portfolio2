import { Component, OnInit } from '@angular/core';
import { PROYECTOS } from 'src/app/mocks/proyecto.mock';
import { IProyecto } from 'src/app/models/proyecto.interface';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

  listaProyectos: IProyecto[]= [];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.listaProyectos = this.proyectoService.obtenerProyectos();
    
  }

}

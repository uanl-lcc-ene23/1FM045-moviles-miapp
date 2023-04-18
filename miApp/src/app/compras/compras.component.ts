import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor() { }

  compras: any = [
    {
      precio: 300,
      descripcion: 'Libro'
    },
    {
      precio: 300,
      descripcion: 'Libro'
    },
    {
      precio: 300,
      descripcion: 'Libro'
    },
    {
      precio: 300,
      descripcion: 'Libro'
    },
    {
      precio: 300,
      descripcion: 'Libro'
    },
    {
      precio: 300,
      descripcion: 'Libro'
    },
    {
      precio: 300,
      descripcion: 'Libro'
    },
    {
      precio: 20,
      descripcion: 'Libro'
    },
    {
      precio: 50,
      descripcion: 'Libro'
    },
    {
      precio: 100,
      descripcion: 'Libro'
    },
    {
      precio: 200,
      descripcion: 'Libro'
    }
  ]

  ngOnInit(): void {
  }

}

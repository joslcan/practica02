import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

  titulo:string = '¿Qué se te antoja hoy?';

  descripcion:string =
  'Descubre comida increíble cerca de ti';

}

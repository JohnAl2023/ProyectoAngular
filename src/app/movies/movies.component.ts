import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./styles.css']
})
export class MoviesComponent {
  movies: Movie[] = [
    // Aquí debes tener una matriz de objetos de películas con sus propiedades
    // Por ejemplo:
    { title: 'Película 1', category: 'Acción', year: 2021 },
    { title: 'Película 2', category: 'Drama', year: 2022 },
    // ...
  ];
}

interface Movie {
  title: string;
  category: string;
  year: number;
}
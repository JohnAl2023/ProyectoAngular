export function mainFunction() {
  const fila = document.querySelector('.contenedor-carousel') as HTMLElement;
  const peliculas = document.querySelectorAll('.pelicula') as NodeListOf<HTMLElement>;

  const flechaIzquierda = document.getElementById('flecha-izquierda') as HTMLElement;
  const flechaDerecha = document.getElementById('flecha-derecha') as HTMLElement;

  // Event Listener para la flecha derecha
  flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo') as HTMLElement;
    if (indicadorActivo?.nextSibling) {
      (indicadorActivo.nextSibling as HTMLElement).classList.add('activo');
      indicadorActivo.classList.remove('activo');
    }
  });

  // Event Listener para la flecha izquierda
  flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo') as HTMLElement;
    if (indicadorActivo?.previousSibling) {
      (indicadorActivo.previousSibling as HTMLElement).classList.add('activo');
      indicadorActivo.classList.remove('activo');
    }
  });

  // Paginacion
  const numeroPaginas = Math.ceil(peliculas.length / 5);
  for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
      indicador.classList.add('activo');
    }

    document.querySelector('.indicadores')?.appendChild(indicador);
    indicador.addEventListener('click', (e) => {
      fila.scrollLeft = i * fila.offsetWidth;

      document.querySelector('.indicadores .activo')?.classList.remove('activo');
      (e.target as HTMLElement).classList.add('activo');
    });
  }

  // Hover
  peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
      const elemento = e.currentTarget as HTMLElement;
      setTimeout(() => {
        peliculas.forEach((pelicula) => pelicula.classList.remove('hover'));
        elemento.classList.add('hover');
      }, 300);
    });
  });

  fila.addEventListener('mouseleave', () => {
    peliculas.forEach((pelicula) => pelicula.classList.remove('hover'));
  });
}
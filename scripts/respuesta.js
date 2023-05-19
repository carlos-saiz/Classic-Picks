    // Array de películas
   export const peliculas = [
      {
        nombre: 'Los ojos sin rostro',
        genero: 'Drama',
        sinopsis: 'Un cirujano planea realizar trasplantes de piel para reconstruir el rostro desfigurado de su hija.',
        direccion: 'Georges Franju',
        reparto: ['Pierre Brasseur', 'Alida Valli', 'Edith Scob']
      },
      {
        nombre: 'Metropolis',
        genero: 'Ciencia ficción',
        sinopsis: 'En una ciudad futurista dividida en clases, un hombre lucha por unir a los trabajadores y los gobernantes.',
        direccion: 'Fritz Lang',
        reparto: ['Alfred Abel', 'Gustav Fröhlich', 'Brigitte Helm']
      },
      {
        nombre: '8 1/2',
        genero: 'Drama',
        sinopsis: 'Un director de cine atraviesa una crisis personal y creativa mientras intenta hacer una nueva película.',
        direccion: 'Federico Fellini',
        reparto: ['Marcello Mastroianni', 'Anouk Aimée', 'Claudia Cardinale']
      },
      {
        nombre: 'El gran dictador',
        genero: 'Comedia',
        sinopsis: 'Un barbero judío se convierte en un dictador parecido a Hitler en una parodia de la Segunda Guerra Mundial.',
        direccion: 'Charles Chaplin',
        reparto: ['Charles Chaplin', 'Paulette Goddard', 'Jack Oakie']
      }
    ];
export function seleccionarPeliculaAlAzar() {
  
    // Obtener todos los nombres de las películas
    const nombresPeliculas = peliculas.map(pelicula => pelicula.nombre);
  
    // Seleccionar una película al azar
    const peliculaSeleccionada = nombresPeliculas[Math.floor(Math.random() * nombresPeliculas.length)];
  
    return peliculaSeleccionada;
  }
  
  // Obtener el elemento con el id "respuestaPelicula"
  const respuestaPelicula = document.getElementById('respuestaPelicula');
  
  // Ejecutar la función y mostrar el resultado en el elemento
  // respuestaPelicula.textContent = seleccionarPeliculaAlAzar();

  

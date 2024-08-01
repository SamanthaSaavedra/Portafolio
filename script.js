let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//Usar el pnto es para llamar a una propiedad o a una accion del objeto.
//Acciones se distinguen por los parentesis ()

typewriter
  .pauseFor(2500)
  .typeString('Samantha Saavedra')
  .pauseFor(300)
  .deleteAll()
  .typeString('<> Programadora')
  .pauseFor(300)
  .deleteAll()
  .typeString('<> Ciencia de Datos')
  .pauseFor(300)
  .deleteAll()
  .typeString('<> Inteligencia Artificial')
  .pauseFor(300)
  .deleteAll()
  .typeString('<> VideoJuegos')
  .pauseFor(300)
  .start();

let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

//Usar el pnto es para llamar a una propiedad o a una accion del objeto.
//Acciones se distinguen por los parentesis ()

typewriterFrase
  .pauseFor(2500)
  .typeString('La vida es bella')
  .pauseFor(300)
  .deleteAll()
  .start();


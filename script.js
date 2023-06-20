document.addEventListener('DOMContentLoaded', function() {
  var btnTopo = document.getElementById('btnTopo');
 


  btnTopo.addEventListener('click', function() {

    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {

  var itensClicados = document.querySelectorAll('.itemClicado');

  itensClicados.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();

      var destinoId = this.getAttribute('data-destino');
      var destino = document.getElementById(destinoId);

      var posicaoDestino = destino.offsetTop;

      window.scrollTo({
        top: posicaoDestino,
        behavior: 'smooth'
      });
    });
  });
});

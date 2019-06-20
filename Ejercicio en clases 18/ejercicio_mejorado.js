$(document).ready(function(){
  $('button').click(function(){
    var saludo = 'Sx.'
    switch ($('input[name=gender]:checked').val()) {
      case 'mujer':
        saludo = 'Sra.'
        break;
      case 'hombre':
        saludo = 'Sr.'
        break;
    }

    var ingreso = " usted no tiene edad para ingresar!"
    if($('input[name=edad]').val()>=18){
      ingreso = " usted es mayor de edad. Puede Ingresar."
    }

    $('h1')[0].innerHTML = saludo + ingreso;
  });
});

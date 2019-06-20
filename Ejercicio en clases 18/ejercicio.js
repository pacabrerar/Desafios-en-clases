var saludo = 'Sx.'
switch (prompt('Ingrese sexo:')) {
  case 'mujer':
    saludo = 'Sra.'
    break;
  case 'hombre':
    saludo = 'Sr.'
    break;
}

var ingreso = " usted no tiene edad para ingresar!"
if(prompt('Ingrese Edad:')>=18){
  ingreso = " usted es mayor de edad. Puede Ingresar."
}

console.log(saludo + ingreso);

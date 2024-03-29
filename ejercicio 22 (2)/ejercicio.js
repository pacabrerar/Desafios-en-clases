//Crear una función que compare
//dos textos y encuentre coincidencias parciales [Pieza del Workshop I]

//Crear una función que reciba como parámetros dos string y devuelva true en caso de encontrar una coincidencia parcial y false en caso contrario, la función no tiene que distinguir mayúsculas de minúsculas. El primer parámetro pasado a la función es el que se va a tratar de encontrarse dentro del segundo, si alguno de los parámetros no es un string también deberá devolver false.
//includesText('Pa', 'Patricia') // Deberá devolver true
//includesText('Patricia', 'Pa') // Deberá devolver false
//includesText(2, 'Pa') // Deberá devolver false
//Hint: Se deberán pasar los parámetros recibidos a mayúsculas y luego hacer la comparación mediante indexOf para poder encontrar coincidencias parciales sin importar mayúsculas y minúsculas.


var texto = `Patricia`
function incluyeTexto(text1, text2){
  if(typeof text1 !== "string" || typeof text2 !== "string"){
    return false
  }else{
    if(text2.toLowerCase().indexOf(text1.toLowerCase()) !== -1){
      return true;
    }else{
      return false
    }
  }
}

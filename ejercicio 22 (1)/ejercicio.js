//La función deberá recibir como parámetro un indice y como segundo parámetro un Array
//y devolver una copia del mismo pero con el elemento que esta en el indice eliminado.


function eliminarElemento(index, array){
if(Array.isArray(array)){
array.splice(index,1);
return array;
}else{
return "No es un arreglo";
}
}

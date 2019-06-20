function readFromLocal(key){
	if(typeof key !== 'string'){
		return 'Llave no valida';
	}
	var list = localStorage.getItem(key);
	if(list){
		return JSON.parse(list);
	}else {
		return []
	}
}

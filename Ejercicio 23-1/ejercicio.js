function arrayToLocal(key, value){
  if(typeof key === "string" && Array.isArray(value)){
    var json_array = JSON.stringify(value);
    localStorage.setItem(key, json_array);
    return true
  }else{
    return null
  }
}

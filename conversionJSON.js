function convertirDatos() {
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'bioetanol.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        console.log(datos);
    

        
    }      
  } 
}  
convertirDatos();
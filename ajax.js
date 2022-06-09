document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'bioetanol.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
        
            let tabla = document.querySelector('#tabla');
            tabla.innerHTML='';

            let contador = 1;

            for (const item of datos) {
                tabla.innerHTML += `
                <tr>
                    <td>${contador}</td>
                    <td>${item.año}</td>
                    <td>${item.mes}</td>
                    <td>${item.nom_pais}</td>
                    <td>${item.nom_unimed}</td>
                    <td>${item.precioMaiz}</td>
                    <td>${item.precioCania}</td>
                    <td>${item.produccionMaiz}</td>
                    <td>${item.produccionCania}</td>
                    <td>${item.produccionTotal}</td>
                    <td>${item.gananciasMaiz}</td>
                    <td>${item.gananciasCania}</td>
                    <td>${item.clasificacionProduccionMaiz}</td>
                    <td>${item.clasificacionProduccionCania}</td>
                    <td>${item.mejorProduccion}</td>
                </tr>
                `
                contador++;
            }
        }
        
        
    }
}
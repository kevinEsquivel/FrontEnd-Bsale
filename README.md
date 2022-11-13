# FrontEnd-Bsale 
![Logo](https://dojiw2m9tvv09.cloudfront.net/68984/1/logobsale-open-graph8239.jpg)
## Tech Stack

**Client:** Html, Css, Bootstrap5,JavaScript

**Server:** Node, Express


Proyecto de front-end de Bsale, en el cual se desarrolla la vista de una tienda con la cual se usaron las tecnologías tales como bootstrap5_html,css,js

### Bootstrap5
Boostrap 5 se uso con la finalidad de avanzar de manera rapida, y usar css solamente en situaciones en las que resulte mas sencillo, todo esto procurando darle un acabado profesional a la pagina

### css
El uso de css puro es en este proyecto es poco, se uso para dar valores mas precisos asi como para darle un formato a las targetas que seria generadas de las consultas al backend, todo esto para hacer mas facil detectar cualquier error y pueda ser corregido de manera rapida.

### JavaScript
Js Nos permitio darle funcionalidad a el FrontEnd, asi como, por medio de Fetch, conectar el backend con el FrontEnd
#### Ejemplo:

```
fetch("http://localhost:8080/api/producto/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
Ademas se implementaron funciones para cargar todos los producto cuando la pagina cargue, siempre buscando la manera mas optima de generar este codigo
```
function cargarTodo(){
    fetch(`http://localhost:8080/api/producto/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        
        const res = await response.json();
        const x = res;
        let html = ``;
        x.results.forEach(result => {
            let {name,url_image,price,discount}= result;
            let oldPrice = price;
            if(discount !== 0){ price =price - ((discount/100)*price) }
            //389- (389/100  * 389) ------//!  350.1
            html += 
            ` <div class="col tarjeta m-1">
            <picture>
              `+(discount!==0?`<div class="tDescuento">
              <span class="descuento">`+discount+`%</span>
              <div class="flechaDescuento"></div>
            </div>`:``)+
            (url_image === '' ?' <span class="Nimage">No image</span>':'')+`
              <img
                src="`+url_image+`"
                alt=""
                class="shadow p-3 mb-3 bg-body rounded"
                id="imgProduct"
              />
            </picture>
  
            <div class="descripcion">
              <h4 id="name">`+name+`</h4>
              `+(discount!==0?`<p id="oldPrice">$`+oldPrice+`</p>`:``)+`
              <p id="price">$`+price+`</p>
            </div>
          </div>`
        });

        addTarjets.innerHTML = html;
        
      })
      .catch((error) => {
        console.log("Ha resultado un error: ", error);
      }); 
  }
```

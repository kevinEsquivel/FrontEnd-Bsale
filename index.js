//*Referencias a PAQUETES
//const socket = io();

const addTarjets = document.getElementById("addTarjets");
const inpBuscar = document.getElementById("buscarInput");
const select = document.getElementById("select");

let id_cat=0;
inpBuscar.oninput =(e) => {
    

     
     let valor = select.options[select.selectedIndex].value
     if(inpBuscar.value == '') return categoria();

     fetch(`http://localhost:8080/api/producto/${inpBuscar.value}?categoria=${valor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        
        const res = await response.json();
        const x = res;
        let html = ``;
        
        
        try {
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
                </div>`:``)+`
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
        } catch (error) {
            html=`<h2 style="color:gray;">Elemento no existe</h2>`
            addTarjets.innerHTML = html;
        }

        addTarjets.innerHTML = html;
      })
      .catch((error) => {
        console.log("Ha resultado un error: ", error);
      }); 
};
document.body.onload = () => {
    cargarTodo();
  }

  function categoria(){
    let valor = select.options[select.selectedIndex].value
    
    if(valor === '0') return cargarTodo();

    fetch(`http://localhost:8080/api/producto/categoria/${valor}`, {
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
            </div>`:``)+`
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
            </div>`:``)+`
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
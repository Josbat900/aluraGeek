import { conexion } from "./conexion.js";

const $ = el => document.querySelector(el); 

const $productList = $('#productList');

function newCard(name,price,url) {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
                            <div class="productImg"><img src="${url}" alt="product"
                                    class="productImagen">
                            </div>
                            <p class="productName">${name}hola</p>
                            <div class="priceTrash">
                                <p class="price">$ ${price}12</p>
                                <div class="trash">
                                    <button>
                                        <img src="svgs/trash.svg" alt="trash">
                                    </button>
                                </div>
                            </div>
    `
    return card
}

async function conexionDb(){
    const list = await conexion.conexionDb()

    list.forEach(producto=>$productList.appendChild(newCard(producto.name,producto.price,producto.url)))
}

conexionDb()

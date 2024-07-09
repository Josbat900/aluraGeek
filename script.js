const $ = el => document.querySelector(el); 

const $productList = $('#productList');
const $form = $('form')

const $productName = $('#name');
const $productPrice = $('#price');
const $productUrl = $('#url');
const $buttonSave = $('#save');

$form.addEventListener('submit', async(e)=>{
    e.preventDefault();

    const t = e.target;
    const name = t.name.value;
    const price = t.price.value;
    const url = t.url.value;
    
    const newCard = 
        `<div class="product">
                            <div class="productImg"><img src="${url}" alt="product"
                                    class="productImagen">
                            </div>
                            <p class="productName">${name}</p>
                            <div class="priceTrash">
                                <p class="price">$ ${price}</p>
                                <div class="trash">
                                    <button>
                                        <img src="svgs/trash.svg" alt="trash">
                                    </button>
                                </div>
                            </div>
        </div>
    `

    $productList.innerHTML = $productList.innerHTML + newCard
})


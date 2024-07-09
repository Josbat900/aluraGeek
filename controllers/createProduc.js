import { conexion } from "./conexion.js";

const $ = el => document.querySelector(el); 
const $form = $('form')


async function createProduct(e){
    e.preventDefault
    const name = $('#name').value;
    const price = $('#price').value;
    const url = $('#url').value;

    await conexion.schemaCreateProduct(name,price,url)
    
    
}

$form.addEventListener('submit',e=>createProduct(e))
async function conexionDb(){
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionJson = conexion.json();
    return conexionJson

}

async function schemaCreateProduct(name,price,url){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            name:name,
            price:price,
            url:url,
            id: crypto.randomUUID()
        })
    })

    const conexionJson = conexion.json

    return conexionJson

}

export const conexion={
    conexionDb,schemaCreateProduct
}
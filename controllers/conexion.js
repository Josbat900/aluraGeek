async function conexionDb(){
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionJson = conexion.json();
    return conexionJson

}

export const conexion={
    conexionDb
}
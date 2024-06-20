const productos = [
  {
    "id": "p01",
    "name": "Producto 1",
    "price": 100.00,
    "amount": 10
  },
  {
    "id": "p02",
    "name": "Producto 2",
    "price": 50.00,
    "amount": 50
  },
  {
    "id": "p03",
    "name": "Producto 3",
    "price": 20.50,
    "amount": 32
  }
]

export function getProducto(stage, idProducto){
    let productoRespuesta = "No encontrado";

    for(let producto of productos){
      if(producto.id == idProducto){
        productoRespuesta = producto;
        break;
      }
    }

    return productoRespuesta
}

export function listProductos(stage){
    let productoRespuesta = "No encontrado";

    productoRespuesta = productos;

    return productoRespuesta
}
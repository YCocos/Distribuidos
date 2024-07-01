export const printCarrito = async (body) => {
    console.log(
        "Tipo::", body.Tipo + "\n",
        "ID::", body.ID + "\n",
        "Productos::", body.Productos + "\n"
    );
}
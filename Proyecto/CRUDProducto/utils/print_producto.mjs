export const printProduct = async (body) => {
    console.log(
        "Tipo::", body.Tipo + "\n",
        "ID::", body.ID + "\n",
        "Nombre::", body.Nombre + "\n",
        "Categoria::", body.Categoria + "\n",
        "Descripcion::", body.Descripcion + "\n",
        "Precio::", body.Precio + "\n",
        "Stock::", body.Stock + "\n"
    );
}
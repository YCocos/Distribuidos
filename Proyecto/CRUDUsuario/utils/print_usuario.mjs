export const printUsuario = async (body) => {
    console.log(
        "Tipo::", body.Tipo + "\n",
        "ID::", body.ID + "\n",
        "Nombre::", body.Nombre + "\n",
        "Direccion::", body.Direccion + "\n"
    );
}
function netoAPagar(cantidadTickets, categoria) {
    //Defino valor de tickets
    const valorTicket = 200;

    let valorTotal = cantidadTickets * valorTicket;

    switch (categoria) {
        case "0":
            valorTotal = valorTotal
            break;

        case "1":
            valorTotal = valorTotal - (valorTotal * 80 / 100)
            break;

        case "2":
            valorTotal = valorTotal - (valorTotal * 50 / 100)
            break;

        case "3":
            valorTotal = valorTotal - (valorTotal * 15 / 100);
            break;
    }
    return valorTotal
}

let formulario = document.getElementById("form_tickets")
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
}
)

let botton = document.getElementById("botonCalcular")

botton.addEventListener("click", () => {
    let cantidad = document.getElementById("cantidad").value
    let categoria = document.getElementById("categoria").value

    let valor = netoAPagar(cantidad, categoria)

    let divMensaje = document.getElementById("totalAPagar")
    divMensaje.textContent = "Total a pagar: $ " + valor
}
)



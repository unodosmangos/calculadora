let calculdora = [{
        tipo: "control",
        boton: "AC"
    },
    {
        tipo: "control",
        boton: '<i class="fa-solid fa-plus-minus"></i>',
        valor: "+/-"
    },
    {
        tipo: "control",
        boton: '<i class="fa-solid fa-percent"></i>',
        valor: "%"
    },
    {
        tipo: "operacion",
        boton: '<i class="fa-solid fa-divide"></i>',
        valor: "/"
    },
    {
        tipo: "operacion",
        boton: '<i class="fa-solid fa-xmark"></i>',
        valor: "X"
    },
    {
        tipo: "operacion",
        boton: <i class="fa-solid fa-minus"></i>,
        valor: "-"
    },
    {
        tipo: "operacion",
        boton: <i class="fa-solid fa-plus"></i>,
        valor: "+",
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-1"></i>,
        valor: 1
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-2"></i>,
        valor: 2
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-3"></i>,
        valor: 3
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-4"></i>,
        valor: 4
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-5"></i>,
        valor: 5
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-6"></i>,
        valor: 6
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-7"></i>,
        valor: 7
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-8"></i>,
        valor: 8
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-9"></i>,
        valor: 9
    },
    {
        tipo: "numero",
        boton: <i class="fa-solid fa-0"></i>,
        valor: 0
    }
]

let controlValor = document.getElementById('control')

for (const botonesControl of calculadora) {
    controlValor.innerHTML += `
        <button>${calculdora.boton}</button>
    `
}
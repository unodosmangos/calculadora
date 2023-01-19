let calculadoraControl = [{
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
    }]

let calculadoraOperacion = [
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
        boton: '<i class="fa-solid fa-minus"></i>',
        valor: "-"
    },
    {
        tipo: "operacion",
        boton: '<i class="fa-solid fa-plus"></i>',
        valor: "+",
    }]

let calculadoraNumeros = [
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-1"></i>',
        valor: 1
    },
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-2"></i>',
        valor: 2
    },
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-3"></i>',
        valor: 3
    },
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-4"></i>',
        valor: 4
    },
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-5"></i>',
        valor: 5
    },
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-6"></i>',
        valor: 6
    },
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-7"></i>',
        valor: 7
    },
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-8"></i>',
        valor: 8
    },
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-9"></i>',
        valor: 9
    },
    {
        tipo: "numero",
        boton: '<i class="fa-solid fa-0"></i>',
        valor: 0
    }
]

let controlValor = document.getElementById('control')

for (const botonesControl of calculadoraControl) {
    controlValor.innerHTML += `
        <div>
        <button>${botonesControl.boton}</button>
        </div>
    `
}


function sumar() {
    let input = document.getElementById('numeroAsumar').value
    let resultado = 0
    for (let i = 1; i <= input; i++) {
        resultado = i + resultado
    }
    document.getElementById('resultado').innerText = resultado
}
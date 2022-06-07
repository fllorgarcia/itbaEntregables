
function Usuario( id, name, dinero) {
    this.id = id;
    this.name = name;
    this.dinero = dinero;
}
let usuarios = [];

function ObtenerNombre() {
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    return nombreUsuario;
}
function ObtenerDineroGastado() {
    let precioIngresado = document.getElementById("dineroGastado").value;
    precioIngresado = parseInt(precioIngresado);
    return precioIngresado;
}


function crearUsuario() {
    let usu = new Usuario(usuarios.length + 1, ObtenerNombre(), ObtenerDineroGastado());
    usuarios.push(usu); 
    mostrarUsuarios();
    document.getElementById('totalGastado').innerText  = 'Total: '+ calcularTotal();
    calcularIndividual();
    
}

function mostrarUsuarios() {
    let lista = '';
    for (let i = 0; i < usuarios.length; i++) {
        lista += usuarios[i].name +
            ' : $' + usuarios[i].dinero + '\n';
    }
document.getElementById('listaUsuarios').innerText  = lista;   
}

function calcularTotal(){
    let total = 0;
    for (let i = 0; i < usuarios.length; i++) {
        total += usuarios[i].dinero;
    }
return total;
}


function calcularIndividual(){
    let totalIndividual = 0
    total = calcularTotal();
    totalIndividual = total / usuarios.length;
    document.getElementById('totalIndividual').innerText  = 'A cada uno le toca aportar: ' +  totalIndividual;
}




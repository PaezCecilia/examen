const lista = []

const agregarnombre= (event)=>{
    event.preventDefault()
    let nombre= document.getElementById("nombre")
    lista.push(nombre.value)
    nombre.value=""
}

const buscarnombre =()=>{
    let indice =  document.getElementById("indice")
    let salida = document.getElementById("salida")
    let nombreencontrado= lista[indice.valueAsNumber]

    salida.innerHTML= nombreencontrado
}
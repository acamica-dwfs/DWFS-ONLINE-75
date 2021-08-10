

const formulario = document.getElementById('formularioCreacionBanda')

const blopImg = (fromData)=>{
    const file = fromData.get('URLimg')
    const image = URL.createObjectURL(file)
}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    const fromData = new FormData(formulario)
 
    fetch('http://localhost:3000/api/bandas', {
        method: 'POST',
        body: fromData
    })
})



/* Create DOM bandas */
const containerBandasCreadas = document.getElementById('containerBandasCreadas')
const containerH3 = document.querySelector('.containerH3')
const h3 = document.createElement('h3')
const mensajeCreaTuBanda = document.getElementById('mensajeCreaTuBanda')

const createDomBandas = (bandasInfo) =>{
    mensajeCreaTuBanda.classList.add('none')
    const container_banda = document.createElement('div')
    container_banda.classList.add('container_banda')

    const container_img_banda = document.createElement('div')
    container_img_banda.classList.add('container_img_banda')

    const info_banda = document.createElement('div')
    info_banda.classList.add('info_banda')

    const pNombre = document.createElement('p')
    pNombre.innerHTML = `<strong>Nombre:</strong> ${bandasInfo.nombre}`
    info_banda.appendChild(pNombre)

    const pIntegrantes = document.createElement('p')
    pIntegrantes.innerHTML = `<strong>Nº integrantes:</strong> ${bandasInfo.Nº_integrantes}`
    info_banda.appendChild(pIntegrantes)
    
    const pCreacion = document.createElement('p')
    pCreacion.innerHTML = `<strong>Creación:</strong> ${bandasInfo.fecha_start}`
    info_banda.appendChild(pCreacion)
    
    const pSeparacion = document.createElement('p')
    pSeparacion.innerHTML = `<strong>Separación:</strong> ${bandasInfo.fecha_end}`
    info_banda.appendChild(pSeparacion)
    
    const pPais = document.createElement('p')
    pPais.innerHTML = `<strong>Pais:</strong> ${bandasInfo.pais}`
    info_banda.appendChild(pPais)
  
    const buttom = document.createElement('button')
    buttom.textContent = 'ver más'
    buttom.addEventListener('click', (e)=>{
        document.body.classList.toggle('infoPermanent');
        if (document.body.classList.contains('infoPermanent')) {
            localStorage.setItem('ventanaPermanente', 'true')
        }    
        e.preventDefault() 
        containerBandasMax.classList.remove('none')
        deleteBandaId(bandasInfo)
        h3.textContent = `${bandasInfo.nombre}` 
        containerH3.appendChild(h3)
    })

    buttom.classList.add('btn_ver_banda')
    buttom.setAttribute("id", "showBanda")
    
    container_img_banda.appendChild(info_banda)
    container_banda.appendChild(container_img_banda)
    container_banda.appendChild(buttom)
    containerBandasCreadas.appendChild(container_banda)
}
/* Create DOM bandas */
const containerBandasMax = document.getElementById('containerBandasMax')
const iconExit = document.getElementById('iconExit')
iconExit.addEventListener('click', ()=>{
    containerBandasMax.classList.add('none')
    document.body.classList.toggle('infoPermanent');
    localStorage.setItem('ventanaPermanente', 'false');
   /*  h3.textContent = '' */

})
/* Create table song */
const updateContainerSongs = document.getElementById('updateContainerSongs')
const bntCloseEliminarSongs = document.getElementById('bntCloseEliminarSongs')
bntCloseEliminarSongs.addEventListener('click', ()=>{
    updateContainerSongs.classList.add('none')
})
const container_info_banda_max = document.querySelector('.container_info_banda_max')
const createSongs = (element) =>{

    const tableCanciones = document.getElementById('tableCanciones')

            const trCancionesTboyd = document.createElement('tr')

            const tdCancionesTbodyNombre = document.createElement('td')
            tdCancionesTbodyNombre.textContent = `${element.nombre}`

            trCancionesTboyd.appendChild(tdCancionesTbodyNombre)
                
            const tdCancionesTbodyDuracion = document.createElement('td')
            tdCancionesTbodyDuracion.textContent = `${element.tiempo_duracion}`
                
            trCancionesTboyd.appendChild(tdCancionesTbodyDuracion)
                
            const tdCancionesTbodyFecha = document.createElement('td')
            tdCancionesTbodyFecha.textContent = `${element.fecha_public}`
                
            trCancionesTboyd.appendChild(tdCancionesTbodyFecha)

            const tdCancionesButton = document.createElement('td')
            const buttoCancionesEdit = document.createElement('button')
            buttoCancionesEdit.setAttribute('id', 'edit')
            buttoCancionesEdit.classList.add('Editar')
            buttoCancionesEdit.textContent = `Editar`
            buttoCancionesEdit.addEventListener('click', (e) =>{
                e.preventDefault()
                valueFormUpdate(element)
                udateDeleteSongs(element)
                updateContainerSongs.classList.remove('none')
            })

            tdCancionesButton.appendChild(buttoCancionesEdit)

            trCancionesTboyd.appendChild(tdCancionesButton)

            tableCanciones.appendChild(trCancionesTboyd)
}
/* Create table song */
/* Create table Album */
const updateContainerAlbum = document.getElementById('updateContainerAlbum')
const bntCloseAlbum = document.getElementById('bntCloseAlbum')
bntCloseAlbum.addEventListener('click', () =>{
    updateContainerAlbum.classList.add('none')
})
const createAlbumForm = (element) =>{
    const tableAlbumes = document.getElementById('tableAlbum')

    const trAlbumes = document.createElement('tr')

    const tdAlbumesTbodyNombre = document.createElement('td')
    tdAlbumesTbodyNombre.textContent = `${element.nombre_album}`

    trAlbumes.appendChild(tdAlbumesTbodyNombre)
        
    const tdAlbumesTbodyDuracion = document.createElement('td')
    tdAlbumesTbodyDuracion.textContent = `${element.banda}`
        
    trAlbumes.appendChild(tdAlbumesTbodyDuracion)
        
    const tdAlbumesTbodyFecha = document.createElement('td')
    tdAlbumesTbodyFecha.textContent = `${element.fecha_publicacion}`
        
    trAlbumes.appendChild(tdAlbumesTbodyFecha)

    const tdAlbumesButton = document.createElement('td')
    const buttoAlbumesEdit = document.createElement('button')
    buttoAlbumesEdit.setAttribute('id', 'edit')
    buttoAlbumesEdit.classList.add('Editar')
    buttoAlbumesEdit.textContent = `Editar`
    buttoAlbumesEdit.addEventListener('click', (e) =>{
        console.log(e.currentTarget)
        valueFormUpdateAlbum(element)
        updateDeleteFormAlbum(element)
        updateContainerAlbum.classList.remove('none')
    })

    tdAlbumesButton.appendChild(buttoAlbumesEdit)

    trAlbumes.appendChild(tdAlbumesButton)

    tableAlbumes.appendChild(trAlbumes)
}
/* Create table Album */

/* Click Add Songs and Album */
const containerAddSongs = document.getElementById('containerAddSongs')
const iconExitAddSongs = document.getElementById('iconExitAddSongs')
const addSongs = document.getElementById('addSongs')

addSongs.addEventListener('click', () =>{
    containerAddSongs.classList.remove('none')
})
iconExitAddSongs.addEventListener('click', () =>{
    containerAddSongs.classList.add('none')
})
const addAlbum = document.getElementById('addAlbum')
const addContainerAlbum = document.getElementById('addContainerAlbum')
const bntCloseAlbumAdd = document.getElementById('bntCloseAlbumAdd')
addAlbum.addEventListener('click', () =>{
    addContainerAlbum.classList.remove('none')
})
bntCloseAlbumAdd.addEventListener('click', () =>{
    addContainerAlbum.classList.add('none')
})
/* Click Add Songs and Album */

/*API */
const getInfoApi = async (url) => {
    try {
        let response = await fetch(url)
        response = await response.json()
        return response
    } catch (e) {
        console.log(e);
    }
}
const getCanciones = () =>{
    let url = `http://localhost:3000/api/canciones`;
    let respuesta = getInfoApi(url);
    respuesta.then((resp)=>{
        resp.result.map((elements, i) =>{
            createSongs(elements, i)
            
        })
    }).catch((e) =>{
        alert("a ocurrido un error" + e)
    })
}
const getBanda = () =>{
    let url = `http://localhost:3000/api/bandas`;
    let respuesta = getInfoApi(url);
    respuesta.then((resp)=>{
        resp.result.map((item, i) => {
            createDomBandas(item, i)
        })
    }).catch((e) =>{
        alert("a ocurrido un error" + e);
    });
}
const getAlbumApi = () =>{
    let url = `http://localhost:3000/api/albumes`;
    let respuesta = getInfoApi(url);
    respuesta.then((resp)=>{
        resp.result.map((item, i) => {
            createAlbumForm(item, i)
            
        });
    }).catch((e) =>{
        alert("a ocurrido un error" + e);
    });
}
getBanda()
getAlbumApi()
getCanciones()
/*API */

/* LocalStorage */

if (localStorage.getItem('ventanaPermanente') === 'true') {
    containerBandasMax.classList.remove('none');
}else{
    containerBandasMax.classList.add('none');
}
/* LocalStorage */

/* Form creac canciones */
const formularioCrearSong = document.getElementById('crearSongs')
formularioCrearSong.addEventListener('submit', (e)=>{
    e.preventDefault()
    const fromData = new FormData(formularioCrearSong)
    fetch('http://localhost:3000/api/canciones', {
        method: 'POST',
        body: fromData
    }).then(res => console.log(res)).catch(e => console.log(e))
    location.reload()
})
/* Form creac canciones */

/* Form creac canciones */
const formularioAlbum = document.getElementById('formAddAlbum')
formularioAlbum.addEventListener('submit', (e)=>{
    e.preventDefault()
    const fromData = new FormData(formularioAlbum)
    fetch('http://localhost:3000/api/Albumes', {
        method: 'POST',
        body: fromData
    }).then(res => console.log(res)).catch(e => console.log(e))
    location.reload()
})
/* Form creac canciones */

/* Update Songs */
const nombreUpdateSong = document.getElementById('name')
const tiempoUpdateSong = document.getElementById('tiempo_duracion')
const albumUpdateSong = document.getElementById('album')
const bandaUpdateSong = document.getElementById('banda')
const fechaUpdateSong = document.getElementById('fecha_public')

const valueFormUpdate = (elements) =>{
    nombreUpdateSong.value = `${elements.nombre}`
    tiempoUpdateSong.value = `${elements.tiempo_duracion}`
    albumUpdateSong.value = `${elements.album}`
    bandaUpdateSong.value = `${elements.banda}`
    fechaUpdateSong.value = `${elements.fecha_public}`

    console.log(elements.id_cancion);
}
const udateDeleteSongs = (elements) =>{
    const formularioUdateSongs = document.getElementById('updateSongsForm')
    const updateSong = document.getElementById('updateSong')

    updateSong.addEventListener('click', (e)=>{
        e.preventDefault()
        const fromData = new FormData(formularioUdateSongs)
        fetch(`http://localhost:3000/api/canciones/${elements.id_cancion}`, {
            method: 'PUT',
            body: fromData
        }).then(res => console.log(res)).catch(e => console.log(e))
        location.reload()
    })

    const deleteSong = document.getElementById('deleteSong')
    deleteSong.addEventListener('click', (e) =>{
        e.preventDefault()
        fetch(`http://localhost:3000/api/canciones/${elements.id_cancion}`, {
            method: 'DELETE',
        }).then(res => console.log(res)).catch(e => console.log(e))
        location.reload()
    })
}
/* Update Songs */


/* Update Album */
const nombreAlbum = document.getElementById('nombreAlbum')
const bandaAlbum = document.getElementById('bandaAlbum')
const fechaAlbum = document.getElementById('fechaAlbum')

const valueFormUpdateAlbum = (elements) =>{
    nombreAlbum.value = `${elements.nombre_album}`
    bandaAlbum.value = `${elements.banda}`
    fechaAlbum.value = `${elements.fecha_publicacion}`
}
const updateDeleteFormAlbum = (elements) =>{
    const formUpdateDeleteAlbum = document.getElementById('formUpdateDeleteAlbum')
    const UpdateAlbum = document.getElementById('UpdateAlbum')

    UpdateAlbum.addEventListener('click', (e)=>{
        e.preventDefault()
        const fromData = new FormData(formUpdateDeleteAlbum)
        fetch(`http://localhost:3000/api/albumes/${elements.id_album}`, {
            method: 'PUT',
            body: fromData
        }).then(res => console.log(res)).catch(e => console.log(e))
        location.reload()
    })

    const deleteAlbum = document.getElementById('deleteAlbum')
    deleteAlbum.addEventListener('click', (e) =>{
        e.preventDefault()
        fetch(`http://localhost:3000/api/albumes/${elements.id_album}`, {
            method: 'DELETE',
        }).then(res => console.log(res)).catch(e => console.log(e))
        location.reload()
    })
}
/* Update Album */

/* Delete Banda */

const deleteBandaId = (elements) =>{
    const deleteBanda = document.getElementById('deleteBanda')
    deleteBanda.addEventListener('click', (e) =>{
        console.log(elements.id_banda);
       e.preventDefault()
        fetch(`http://localhost:3000/api/bandas/${elements.id_banda}`, {
                method: 'DELETE',
            }).then(res => console.log(res)).catch(e => console.log(e))
        localStorage.setItem('ventanaPermanente', 'false');
        location.reload()
    })

}
/* Delete Banda */

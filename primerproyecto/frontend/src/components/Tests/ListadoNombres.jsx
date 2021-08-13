import React, {useState} from 'react'
import uniqid from 'uniqid'

const ListadoNombres = () => {

    const [nombre, setNombre] = useState("")
    const [listaNombres, setListaNombres] = useState([])
    const [modoEdicion, setModoEdicicion] = useState(false)
    const [id, setId] = useState("")
    const [error, setError] = useState(null)

    // Funcion de submit formulario, es decir, nuevo nombre

    const addNombre = (e) => {

        e.preventDefault();

        if (!nombre.trim()) {
            setError('El campo nombre esta vacio')
            return
        }
        else {
            const nuevoNombre = {
                id: uniqid(),
                name: nombre
            }
            setListaNombres([...listaNombres, nuevoNombre])
            setNombre('') // Se reinicia el nombre
            setError(null) // Se reinicia el error
        }
    }

    const deleteName = (id) =>{
        const nuevaArray = listaNombres.filter( item => item.id !== id)
        setListaNombres(nuevaArray)
    }

    const editItem = (item) => {
        setModoEdicicion(true)
        setNombre(item.name)
        setId(item.id)
    }

    const editName = (e) => {
        e.preventDefault()

        const nuevoArray = listaNombres
            .map(item => item.id === id ? { id:id, name: nombre} : item) 
        setListaNombres(nuevoArray)
        setModoEdicicion(false)
        setNombre("")
    }
    return (
        <div>
            {/* Aca se escribe el nombre de la persona */}
            <div>
                <form onSubmit={ modoEdicion ? editName : addNombre} className = "form-groups">
                    <input 
                        placeholder = "Ingresa el nombre"
                        className = "form-control mb-3"
                        type = "text"
                        onChange = {(e) => {setNombre(e.target.value)}}
                    />

                    {/* Boton de submit */}
                    <input 
                        className = "btn btn-info btn-block mb-3"
                        type = "submit"
                    />
                </form>
            </div>

            {/* Acá se muestra la lista de los nombres */}
            <div>
                <ul className="list-group">
                        {
                            listaNombres.map( item => 

                                <li key = {item.id} className = "list-group-item"> 
                                    {item.name} 
                                    <button onClick = {() => deleteName(item.id)} className="btn btn-danger float-end"> Eliminar </button>
                                    <button onClick = {() => editItem(item)} className="btn btn-warning float-end"> Editar </button>
                                </li> 
                            )
                        }
                </ul>
            </div>

            {/* Alerta sobre errores */}
            {
                error != null ? (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                ) : (
                    <div></div>
                )
            }

        </div>
    )
}

export default ListadoNombres;

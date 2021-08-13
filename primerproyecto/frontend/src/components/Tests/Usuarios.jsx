import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Item from 'antd/lib/list/Item'

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const obtenerUsuarios = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users') // Aca se guarna la respuesta del api
        const users = await res.data
        setUsuarios(users)
    }

    useEffect( ()=> {
        obtenerUsuarios()
    } , [])

    return (
        <div>
            <ul>
                {
                    usuarios.map( (item) => (
                        <li key = {item.id}> 
                            <Link to={`/usuario/${item.id}`}> {item.name} </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Usuarios;

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import before from './imgs/atras.png';
import {
    Link
  } from 'react-router-dom'

const Account = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const [verified, setVerified] = useState("")

    useEffect( () => {
        async function fetchData() {
          const res = await axios.get('http://localhost:8000/users/find/'+sessionStorage.getItem('userId'))
          setUsername(res.data['username'])
          setEmail(res.data['email'])
          setCreatedAt(res.data['createdAt'])
          setVerified(res.data['verified'])
        }
        fetchData()
      }, [])

    const logOut = (e) => {
        e.preventDefault()
        console.log("aca se ciera sesion")
        sessionStorage.clear()
        window.location.href = "/Login";
    }

    return (
        <div>
            <Link to = "/">
              <input className = "retroceso" type = "image" src = {before} 
                                alt = "home-button" />
            </Link>
            <div className="buttons-text">
                <h3> <b> DATOS DE LA CUENTA </b> </h3> 
                <li> Usuario: {username} </li>
                <li> Email: {email} </li>
                <li> Fecha de Cración: {createdAt} </li>
                <li> Estado de la cuenta: {verified} </li>
                <button id="contBtn" onClick = {(e) => {logOut(e)}}> Cerrar Sesion </button>
            </div>
        </div>
    )
}

export default Account

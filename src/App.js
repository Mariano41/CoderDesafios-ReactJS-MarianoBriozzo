import Button from 'react-bootstrap/Button';
import Logo from './img/logo.png';

import Productos from "./components/Productos";

import "./app/style.css"

import { LightBox, GlobalStyle } from "./app/styles";

import NavBar from './components/NavBar';


// import NavBar from "./components/navbar"

const listado = [
    {
        name: "Guitarra Electica",
        precio: 30000
    },
    {
        name: "Guitarra Criolla",
        precio: 15000
    },
    {
        name: "Guitarra Electro Acústica",
        precio: 25000
    },
    {
        name: "Cuerdas",
        precio: 3000
    },
    {
        name: "Afinador",
        precio: 1000
    },
    {
        name: "Fundas",
        precio: 2500
    },
    {
        name: "Puas",
        precio: 700
    },
]

const App = () => {
    return (
        <div className="box">

            <NavBar />
            <LightBox LightBox visible={true} >
                <div >

                    <h1>Lista de Productos</h1>
                    <Productos datos={listado} />

                </div>
            </LightBox>
        </div>
    );
}

export default App;

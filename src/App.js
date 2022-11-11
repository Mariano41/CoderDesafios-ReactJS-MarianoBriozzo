import Button from 'react-bootstrap/Button';
import Logo from './img/logo.png';
import ItemCount from './components/ItemCount';
import ItemListContainer from "./components/ItemListContainer"

import Productos from "./components/Productos";

import "./app/style.css"

import NavBar from './components/NavBar';


const mensaje = "Welcome to GuitarHouse"

const App = () => {
    let stock = 8

    return (
        <div >

            <NavBar />

            <ItemListContainer greetings={mensaje} ></ItemListContainer>
            <ItemCount stock={stock}></ItemCount>
        </div>

    );
}



export default App;

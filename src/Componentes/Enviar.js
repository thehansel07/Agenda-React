import React, { Component } from 'react';

class Enviar extends Component{
    constructor () {
        super();
       
        this.Enviar = this.Enviar.bind(this);
      }
      
    Enviar(e) {
        e.preventDefault();
        let nombre = document.querySelector("#nombre").value;
        let apellido = document.querySelector("#apellido").value;
        let telefono = document.querySelector("#telefono").value;

        let contacto = {nombre, apellido, telefono};
        fetch("http://www.raydelto.org/agenda.php",
        {
            method:'POST',
            body:JSON.stringify(contacto)}
        ).then( res => res.json()).then(
            (res) =>
            {
                console.log(res);
            }
        
        );
        }
    render(){
        return(
        <div  id="MostrarDS">
            
            <button className="button" type="submit" onClick ={this.Enviar}  >Enviar</button>

        </div>
        
        );
    }

}

export default Enviar;
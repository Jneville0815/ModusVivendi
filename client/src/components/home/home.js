import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './home.css'

class Home extends Component {

    render() {
           return(
               <div>
             <div className="heading">
          WELCOME TO MODUS VIVENDI 
            </div>
                  <div className="paragraph">
          Are you ready to lose some wieght or again some muscle mass? You are in the right place. 
            </div>       
               </div>
   
    );
    }
}
export default Home;

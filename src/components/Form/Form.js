import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Row, Col, Label } from 'reactstrap';
import axios from 'axios'
import Modal from 'react-modal';
import Thanks from '../Thanks/Thanks'


import './Form.css';

import { data } from './data';

export default class Forms extends Component{
   constructor(){
      super();
      this.state = {
         showModal: false,
         Name: false,
         Email: false,
         Address: false,
         Tel: false,
         City: false,
         Aggree: false
      };
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleAddress = this.handleAddress.bind(this);
      this.handleTel = this.handleTel.bind(this);
      this.handleCity = this.handleCity.bind(this);
      this.handleAggree = this.handleAggree.bind(this);

   }
   
   handleName(){
      this.setState({Name: true});
   }
   handleEmail(){
      this.setState({Email: true});
   }
   handleAddress(){
      this.setState({Address:true});
   }
   handleTel(){
      this.setState({Tel: true});
   }
   handleCity(){
      this.setState({City: true});
   }
   handleAggree(){
      this.setState({Aggree:true})
   }
   handleOpenModal(){
      this.setState({showModal: true});
   }
   handleCloseModal(){
      this.setState({showModal: false});
   }
   handleSubmit(e){
      e.preventDefault();
      axios.post('/correo/',{
         name: e.target.name.value,
         email: e.target.email.value,
         address: e.target.address.value,
         Tel: e.target.Tel.value,
         city: e.target.city.value,
      }).then((response)=>{
         debugger;
         if(response.data.status === 'success'){
            alert("Message Sent.");
            e.target.name.value="";
            e.target.email.value="";
            e.target.address.value="";
            e.target.Tel.value="";
            e.target.city.value="";
         } else if(response.data.status=== 'fail'){
            alert("Message failed to send.")
         }
      })
   }
   render(){     
      let id=-1;
      let FormAvaible = "1";
      
      if(this.state.Name && this.state.Email && this.state.Address && this.state.Tel && this.state.City && this.state.Aggree){
         FormAvaible="";
      }else{
         FormAvaible="1";
      }
      return(
         <React.Fragment>
            <Modal
               isOpen={this.state.showModal}
               contentLabel="onRequestClose Example"
               onRequestClose={this.handleCloseModal}
               className="Modal"
               overlayClassName="Overlay"
            >
               <Thanks />               
            </Modal>
            
            <Form className="" onSubmit={(e)=>this.handleSubmit(e)}>
               <FormGroup>
                  <Input className="form" type="name" name="name" id="name"
                     placeholder="Nombre y Apellido*" required onChange={this.handleName}
                  />
               </FormGroup>
               <FormGroup>
                  <Input className="form" type="email" name="email" id="email"
                     placeholder="Correo electrónico*" required onChange={this.handleEmail} 
                  />
               </FormGroup>
               <FormGroup>
                  <Input className="form" type="address" name="address" id="address"
                     placeholder="Dirección de envio*" required onChange={this.handleAddress}
                  />
               </FormGroup>
               <FormGroup>
                  <Input className="form" type="Tel" name="Tel" id="Tel"
                     placeholder="Teléfono de contacto*" required onChange={this.handleTel}
                  />
               </FormGroup>
               <FormGroup>
                  <Row>
                     <Col /* md={6} */ xs={6}>
                        <Input className="form" type="select" name="city" id="city"
                        defaultValue="" onChange={this.handleCity}
                        >
                           <option value=""   disabled hidden >Ciudad*</option>
                           {data.map(() =>{
                              id=id+1;
                              return(
                                 <option key={data[id].id}>{data[id].city}</option>
                              );
                           })}
                     </Input>
                     </Col>
                     <Col xs={6}>
                        <Label>
                           *Espacios obligatorios
                        </Label>
                     </Col>
                  </Row>
               </FormGroup>
               <FormGroup check>
                  <Label check>
                     <Input  type="checkbox" name="Terms" id="Terms" required onChange={this.handleAggree} />{' '}
                     Acepto que mis datos sean tratados bajo la <a href="https://www.merz-institute.com/theme/merztiaa/web/custompage/index.php?id=5" target="blank">política de privacidad</a> de datos de Merz Aesthetics Colombia*.
                  </Label>
               </FormGroup>
               <FormGroup>
                  <Button type="submit" disabled={FormAvaible} className="XeoSubmitBTN" onClick={this.handleOpenModal}>
                     Enviar
                  </Button>
               </FormGroup>
            </Form>
            
         </React.Fragment>
      );
   }
}
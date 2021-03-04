import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, CustomInput, Row, Col, Label } from 'reactstrap';
import axios from 'axios'

import './Form.css';

import { data } from './data';

export default class Forms extends Component{
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
      return(
         <React.Fragment>
            <Form className="" onSubmit={(e)=>this.handleSubmit(e)}>
               <FormGroup>
                  <Input className="form" type="name" name="name" id="name"
                     placeholder="Nombre y Apellido*" required
                  />
               </FormGroup>
               <FormGroup>
                  <Input className="form" type="email" name="email" id="email"
                     placeholder="Correo electrónico*" required
                  />
               </FormGroup>
               <FormGroup>
                  <Input className="form" type="address" name="address" id="address"
                     placeholder="Dirección de envio*" required
                  />
               </FormGroup>
               <FormGroup>
                  <Input className="form" type="Tel" name="Tel" id="Tel"
                     placeholder="Teeléfono de contacto*" required
                  />
               </FormGroup>
               <FormGroup>
                  <Row>
                     <Col md={6}>
                        <Input className="form" type="select" name="city" id="city"
                        
                        >
                           <option value="" selected disabled hidden >Ciudad*</option>
                           {data.map(() =>{
                              id=id+1;
                              return(
                                 <option>{data[id].city}</option>
                              );
                           })}
                     </Input>
                     </Col>
                     <Col md={6}>
                        <Label>
                           *Espacios obligatorios
                        </Label>
                     </Col>
                  </Row>
               </FormGroup>
               <FormGroup check>
                  <Label check>
                     <Input  type="checkbox" name="Terms" id="Terms" required />{' '}
                     He leido y acepto los <a href="" target="blank">terminos y condiciones</a>
                  </Label>
               </FormGroup>
               <FormGroup>
                  <Button type="submit" className="XeoSubmitBTN">
                     Enviar
                  </Button>
               </FormGroup>
            </Form>
         </React.Fragment>
      );
   }
}
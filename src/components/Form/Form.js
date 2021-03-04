import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, CustomInput, Row, Col, Label } from 'reactstrap';

import './Form.css';

export default class Forms extends Component{
   render(){
      return(
         <React.Fragment>
            <Form className="" >
               <FormGroup>
                  <Input type="name" name="name" id="name"
                     placeholder="Nombre y Apellido*"
                  />
               </FormGroup>
               <FormGroup>
                  <Input type="e-mail" name="e-mail" id="e-mail"
                     placeholder="Correo electrónico*"
                  />
               </FormGroup>
               <FormGroup>
                  <Input type="address" name="address" id="address"
                     placeholder="Dirección de envio*"
                  />
               </FormGroup>
               <FormGroup>
                  <Input type="Tel" name="Tel" id="Tel"
                     placeholder="Teeléfono de contacto*"
                  />
               </FormGroup>
               <FormGroup>
                  <Row>
                     <Col md={6}>
                        <CustomInput type="select" name="city" id="city"
                        placeholder="Ciudad*"
                        >
                           <option value="">Ciudad*</option>
                           <option>Aguachica</option>
                           <option>Aqui pondria más ciudades...</option>
                     </CustomInput>
                     </Col>
                     <Col md={6}>
                        <Label>
                           *Espacios obligatorios
                        </Label>
                     </Col>
                  </Row>
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
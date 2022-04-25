import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import NavbarPage from "../../components/Navbar/index";

import styled, {
  Userpic,
  Username,
  Userprofilecontainer,
  Botao_editar_perfil

} from './styleduser_profile';
import '../..';
import User_profile_infos from '../../components/user_profile_infos/user_profile_infos.js';
import ModalPayment from '../../components/Modal/Modalpayment';




 function User_profile () {
    return(
      <div>
        <NavbarPage/>
        <Userpic/>
        <Botao_editar_perfil> Editar </Botao_editar_perfil>
        <Username>Arthur Fernandes</Username>
        <Userprofilecontainer>
          <User_profile_infos/>
        </Userprofilecontainer>
      </div>

    ) 
  }

export default User_profile;


/*
return (
  <div>
    <Row className="profileContainer">
      <Col md={6}>
        <Form onSubmit={submitHandler}>
          {loading && <Loading />}
          {success && (
            <ErrorMessage variant="success">
              Updated Successfully
            </ErrorMessage>
          )}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>{" "}
          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic">
            <Form.Label>Change Profile Picture</Form.Label>
            <Form.File
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>
          <Button type="submit" varient="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={pic} alt={name} className="profilePic" />
      </Col>
    </Row>
  </div>
);
};

*/
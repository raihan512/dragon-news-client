import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../components/Shared/Header/Header";
import LeftNav from "../../components/Shared/LeftNav/LeftNav";
import RightNav from "../../components/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row className='my-5'>
          <Col lg='3'>
            <LeftNav></LeftNav>
          </Col>
          <Col lg='7'>
            <Outlet></Outlet>
          </Col>
          <Col lg='2'>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;

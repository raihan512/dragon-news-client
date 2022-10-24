import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/' className=''>
            DragonNews
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link>
              <Link to='/'>All News</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/'>{user?.displayName}</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/'>
                {user?.photoUR ? (
                  <Image
                    src={user?.photoUR}
                    roundedCircle
                    style={{ height: "30px" }}
                  ></Image>
                ) : (
                  <FaUserAlt />
                )}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

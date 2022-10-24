import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { AuthContext } from "../../../Context/UserContext";

const RightNav = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    loginWithGoogle(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleLogin}
          variant='outline-primary'
          className='border rounded mb-2'
        >
          Signin with Google
        </Button>
        <Button variant='outline-dark' className='border rounded mb-2'>
          Signin with github
        </Button>
      </ButtonGroup>

      <div>
        <h5>Find Us On</h5>
      </div>

      <div>
        <ListGroup>
          <ListGroup.Item className='mb-2 border rounded'>
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className='mb-2 border rounded'>
            Youtube
          </ListGroup.Item>
          <ListGroup.Item className='mb-2 border rounded'>
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className='mb-2 border rounded'>
            Twitch
          </ListGroup.Item>
          <ListGroup.Item className='mb-2 border rounded'>
            Whatsapp
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightNav;

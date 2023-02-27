import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// import { login } from '../redux/apiCalls.js';
import { mobile } from '../responsive';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../redux/userRedux';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const RedirectTag = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

// const Error = styled.span`
//   color: red;
// `;

const initialState = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/';
  const [formValue, setFormValue] = useState(initialState);
  const { error } = useSelector((state) => state.user);
  // const { isFetching, error } = useSelector((state) => state.user);

  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleClick = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast, redirect }));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div>
      <NavBar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              label="email"
              type="email"
              required
              value={email}
              name="email"
              placeholder="email"
              onChange={onInputChange}
              invalid
              validation="Provide your email"
            />
            <Input
              label="password"
              type="password"
              value={password}
              name="password"
              placeholder="password"
              onChange={onInputChange}
              required
              invalid
              validation="Provide your password"
            />
            <Button onClick={handleClick}>SIGN IN</Button>
            {/* {error && <Error>Something went wrong</Error>} */}
            <RedirectTag>
              <Link>foget Password?</Link>
              <Link to={`/register?redirect=${redirect}`}>
                <p>CREATE A NEW ACCOUNT</p>
              </Link>
            </RedirectTag>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default LoginScreen;

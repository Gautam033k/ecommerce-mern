import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import { register } from '../redux/userRedux';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Aggrement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterScreen = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { error } = useSelector((state) => state.user);

  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleClick = (e) => {
    e.preventDefault();

    if (password !== confirmPassword)
      return toast.error('Password should match');
    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>

        <Form>
          <Input
            placeholder="firstName"
            label="firstName"
            type="text"
            value={firstName}
            name="firstName"
            onChange={onInputChange}
            required
            invalid
            validation="Provide your firstName"
          />
          <Input
            placeholder="lastName"
            label="lastName"
            type="text"
            value={lastName}
            name="lastName"
            onChange={onInputChange}
            required
            invalid
            validation="Provide your lastName"
          />
          <Input
            placeholder="email"
            label="email"
            type="text"
            value={email}
            name="email"
            onChange={onInputChange}
            required
            invalid
            validation="Provide your email"
          />
          <Input
            placeholder="password"
            label="password"
            type="password"
            value={password}
            name="password"
            onChange={onInputChange}
            required
            invalid
            validation="Provide your password"
          />
          <Input
            placeholder="confirmPassword"
            label="confirmPassword"
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={onInputChange}
            required
            invalid
            validation="Provide your confirmPassword"
          />
          <Aggrement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Aggrement>
          <Button onClick={handleClick}>CREATE BUTTON</Button>
          <Link to="/login">
            <p>Already have an Account? Login</p>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterScreen;

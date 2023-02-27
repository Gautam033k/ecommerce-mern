import React from 'react';
import styled from 'styled-components';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 80px;
  ${mobile({ height: '70px' })}
`;
const Wrapper = styled.div`
  padding: 0px 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '6px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '40px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px', marginLeft: '15px' })}
`;
const Right = styled.div`
  flex: 1;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 10px;
  /* margin-left: 25px; */
  justify-content: flex-end;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity); //extract quantity from
  // store .. //cart-in reducer
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchRoundedIcon style={{ color: 'gray', fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Link to="/">
          <Center>
            <Logo>Vormir.</Logo>
          </Center>
        </Link>

        <Right>
          <MenuItem>
            <Link to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem>SIGN-IN</MenuItem>
            </Link>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

import React from 'react';
import styled from 'styled-components';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

const Container = styled.div`
  height: 80px;
`;
const Wrapper = styled.div`
  padding: 0px 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
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
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
`;

const MenuItem = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 10px;
  /* margin-left: 25px; */
  justify-content: flex-end;
`;

const NavBar = () => {
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
        <Center>
          <Logo>Vormir.</Logo>
        </Center>
        <Right>
          <MenuItem>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN-IN</MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

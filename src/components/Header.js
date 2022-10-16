import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <div>
      <nav>
        <StyledHeader>
          <StyleNavLink to="/">아드리엘 마크</StyleNavLink>
          <StyleNavLink to="/product">상품</StyleNavLink>
          <StyleNavLink to="/price">서비스 비용</StyleNavLink>
          <StyleNavLink to="/support">고객 지원</StyleNavLink>
          <StyleNavLink to="/usage">고객 사례</StyleNavLink>
          <StyleNavLink to="/introduceUs">기업 소개</StyleNavLink>

          {location.pathname !=='/' && <SytleButton>로그인</SytleButton>}
        </StyledHeader>
      </nav>
    </div>
  )
}

const StyledHeader = styled.header`
  display: flex;
`;

const StyleNavLink = styled(NavLink)`
  width: 16%;
  background: white;
  margin-botton: 10px;
  padding: 1em;
  color: #555;
  font-weight: bold;
  text-decoration: none;
  text-align: center;

  :hover {
    background: lightgrey;
    border-radius: 0.5rem;
    color: black;
    transition: 0.5s;
  }
`;

const SytleButton = styled.button`
  width: 16%;
  background: white;
  border: none;
  padding: 1em;
  color: #555;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  :hover {
    background: lightblue;
    border-radius: 0.5rem;
    color: black;
    transition: 0.5s;
  }
`;

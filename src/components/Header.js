import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Header() {
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
  padding: 1em;
  color: inherit;
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

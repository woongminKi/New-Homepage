import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <StyleBoarder>
      <StyleNavLink to='/'>Adriel</StyleNavLink>
      <StyleNavLink to='https://www.adriel.com/ko/legal/privacy'>개인정보 처리방침</StyleNavLink>
      <StyleNavLink to='https://www.adriel.com/ko/legal/cookies'>쿠키 정책</StyleNavLink>
      <StyleNavLink to='https://www.adriel.com/ko/legal/terms'>쿠키 정책</StyleNavLink>
      <P>
        대표자: 엄수원<br/>
        서울특별시 종로구 삼봉로 94, 94빌딩 16층, 1604, 1605호<br/>
        사업자등록번호: 838-87-00916<br/>
        통신판매업신고번호: 2018-서울강남-03748<br/>
        Adriel © 2021. All Rights Reserved.
      </P>
    </StyleBoarder>
  )
}

const StyleBoarder = styled.div`
  background: #333;
  padding: 1em 0 1em 1em;
`;

const StyleNavLink = styled(NavLink)`
  width: 10%;
  margin-right: 1em;
  padding-right: 1em;
  color: #bebebe;
  font-size: 0.9em;
  font-weight: bold;
  text-decoration: none;
  text-align: center;

  :hover {
    color: white;
    transition: 0.5s;
  }
`;

const P = styled.p`
color: #bebebe;
font-size:0.8em;
`

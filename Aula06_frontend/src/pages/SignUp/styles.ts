import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import SignUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100%;
  max-height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
  min-height: 100vh;
  max-height: 100%;
`;

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translateX(50px);
  }
  to {
    opacity:1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  padding-bottom: 10px;

  animation: ${appearFromRight} 1s;

  img {
    height: 100%;
    width: 100%;
    margin-top: 8px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: block;
    margin-top: 14px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackground}) no-repeat center;
  background-size: cover;
`;

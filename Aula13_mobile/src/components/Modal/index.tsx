/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';

import {
  Container,
  ModalContainer,
  ModalIndicator,
  ModalTitle,
  ModalText,
  ModalBtn,
  ModalBtnText,
} from './styles';

const Modal = ({close}) => {
  return (
    <Container>
      <ModalContainer>
        <ModalIndicator />

        <ModalTitle>Atenção!</ModalTitle>

        <ModalText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
          massa odio. Quisque ante sem, tempor eget massa vel, mollis tincidunt
          metus. Ut sed felis lectus.
        </ModalText>
      </ModalContainer>

      <ModalBtn onPress={close}>
        <ModalBtnText>Close</ModalBtnText>
      </ModalBtn>
    </Container>
  );
};

export default Modal;

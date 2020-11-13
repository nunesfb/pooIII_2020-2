import styled from 'styled-components/native';
import {Animated, TouchableOpacity} from 'react-native';

export const Container = styled(Animated.View)`
  width: 100%;
  height: 75%;
  background-color: 'rgba(8, 8, 8, 0.9)';
  position: absolute;
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(Animated.View)`
  bottom: 0;
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const ModalIndicator = styled(Animated.View)`
  width: 50px;
  height: 5px;
  background-color: #ccc;
  border-radius: 50px;
  align-self: center;
  margin-top: 5px;
`;

export const ModalTitle = styled(Animated.Text)`
  margin-top: 50px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 32px;
`;

export const ModalText = styled(Animated.Text)`
  margin-top: 50px;
  text-align: center;
  color: #fff;
`;

export const ModalBtn = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #750505;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  position: absolute;
`;

export const ModalBtnText = styled(Animated.Text)`
  text-align: center;
  color: #fff;
`;

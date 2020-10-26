import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 48px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  margin: 16px 4px 0px;

  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 8px;
`;

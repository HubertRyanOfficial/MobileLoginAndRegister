import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  background-color: #fff;
  height: 70px;
  elevation: 1;
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserBox = styled.View`
  background-color: ${(props) => props.backgroundColor};
  width: 40px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const OptionsSignContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const OptionSelected = styled.View`
  justify-content: center;
  align-items: center;
`;

export const OptionSelectedText = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const OptionSelectedBar = styled.View`
  width: 50px;
  height: ${StyleSheet.hairlineWidth}px;
  background-color: #000;
  margin-top: 10px;
`;

export const OptionNoSelected = styled.TouchableOpacity`
  padding: 5px;
`;

export const OptionNoSelectedText = styled.Text`
  margin-left: 30px;
  font-size: 16px;
  color: #000;
`;

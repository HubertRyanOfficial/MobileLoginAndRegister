import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const MiddleContainer = styled.ScrollView`
  padding: 0px 20px;
  flex: 1;
`;

export const MiddleTitle = styled.Text`
  font-size: 25px;
  letter-spacing: 2px;
  margin-top: 100px;
`;

export const MiddleSubTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const InputsContainer = styled.View`
  margin-top: 30px;
`;

export const EmailInput = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #ddd;
  color: #000;
  font-size: 16px;
`;

export const PasswordInput = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #ddd;
  color: #000;
  font-size: 16px;
  margin-top: 25px;
`;

export const ForgotPasswordContainer = styled.TouchableWithoutFeedback``;

export const ForgotPasswordText = styled.Text`
  font-size: 12px;
  color: #000;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const BottomContainer = styled.View`
  height: 100px;
  background-color: #eee;
`;

export const BottomButton = styled.View`
  background-color: #84bcda;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  top: -30px;
`;

export const Button = styled.TouchableWithoutFeedback``;

// Desenvolvido por Hubert Ryan

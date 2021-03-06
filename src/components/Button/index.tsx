import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { colors } from "../../utils/styles/colors";
import icon from "../../assets/icons/chevron-right.png";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  label: string;
}

const ButtonComponent = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 54px;
  width: 135px;
  outline: none;
  border: none;
  color: white;
  background-color: ${(props) =>
    props.disabled ? colors.grey : colors.water_blue};
  font-family: "Nunito Sans Bold";
  font-size: 17px;
  border-radius: 3px;
  cursor: pointer;
  margin: auto;

  ${(props) =>
    !props.disabled &&
    `
  &:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
      center/15000%;
  }
  `}
`;

const Button = (props: ButtonProps) => {
  const { label, ...buttonAttrs } = props;
  return (
    <ButtonComponent {...buttonAttrs}>
      <img src={icon} alt="chevron-right" />
      {label}
    </ButtonComponent>
  );
};

export default Button;

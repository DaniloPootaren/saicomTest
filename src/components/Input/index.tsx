import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { boolean } from "yup";
import icon from "../../assets/icons/exclamation.png";
import { colors } from "../../utils/styles/colors";

interface InputProps extends InputHTMLAttributes<any> {
  label: string;
  error: boolean;
  errorMessage?: string;
  mandatory?: boolean;
}

const Container = styled.div`
  position: relative;
  height: 3em;
`;

const InputComponent = styled.input`
  padding: 13px 10px 0 10px;
  margin: 0 5px 0 5px;
  height: 51px;
  width: 100%;
  border: 1px solid ${colors.grey};
  outline: none;
  font-size: 15px;
  background-color: ${colors.light_grey};
  transition: border-bottom 0.1s;
  ${(props) =>
    props.error &&
    `background: url(${icon}) no-repeat scroll ${colors.light_grey};
     background-size: 20px;
     background-position: right 6% bottom 50%;`}

  &:hover {
    background-color: ${colors.white};
  }

  &:focus + label {
    font-size: 11px;
    font-weight: 300;
    top: 10px;
    color: ${colors.black};
  }

  &:focus {
    border-bottom: 3px solid ${colors.black};
  }

  &:valid + label {
    font-size: 11px;
    font-weight: 300;
    top: 10px;
    color: ${colors.black};
  }

  &:valid {
    ${(props: { error: boolean }) =>
      props.error && `border-bottom: 3px solid ${colors.red}`}
  }
`;
const InputLabel = styled.label`
  position: absolute;
  color: ${colors.lighter_grey};
  left: 15px;
  top: 21px;
  font-family: "Nunito Sans Bold";
  transition: top 0.1s;
`;

const ErrorMessage = styled.div`
  color: ${colors.red};
  margin-left: 2px;
  padding: 4px;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1rem;
  margin-top: 0.25rem;
`;

const Wrapper = styled.div``;

const Input = (props: InputProps) => {
  const { label, error, errorMessage, mandatory, id, required, ...inputAttrs } =
    props;
  return (
    <Container>
      <Wrapper>
        <InputComponent error={error} required id={label} {...inputAttrs} />
        <InputLabel htmlFor={label}>{`${label}${mandatory && "*"}`}</InputLabel>
      </Wrapper>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Input;

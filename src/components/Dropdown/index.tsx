import styled from "styled-components";
import { colors } from "../../utils/styles/colors";
import icon from "../../assets/icons/chevron-down.png";
import errorIcon from "../../assets/icons/exclamation.png";
import { SelectHTMLAttributes } from "react";
import { string } from "yup";

interface DropdownProps extends SelectHTMLAttributes<any> {
  placeholder: string;
  error: boolean;
  errorMessage?: string;
  mandatory?: boolean;
  id: string;
  options: string[];
}

const Container = styled.div`
  position: relative;
  height: 54px;
  margin: 10px;
`;

const Select = styled.select`
  position: relative;
  padding: 13px 10px 6px 24px;
  margin: 0 5px 0 5px;
  height: 54px;
  width: 100%;
  border: 1px solid ${colors.grey};
  outline: none;
  font-size: 15px;
  transition: border-bottom 0.1s;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  &:hover {
    background-color: ${colors.white};
  }

  &:focus {
    border-bottom: 3px solid ${colors.water_blue};
  }

  ${(props: { error: boolean }) =>
    props.error
      ? `background: url(${errorIcon}) no-repeat scroll ${colors.light_grey};
     border-bottom: 2px solid ${colors.red};
     background-position: right 6% bottom 50%;`
      : `
     
     background: url(${icon}) no-repeat right ${colors.light_grey};
     background-position: right 15% bottom 50%;
     `}
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  margin: 5px 0 0 29px;
  font-size: 11px;
  font-weight: 300;
  color: ${colors.lighter_grey};
`;

const ErrorMessage = styled.div`
  color: ${colors.red};
  font-family: "Nunito Sans Bold";
  margin-left: 2px;
  padding: 4px;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1rem;
  margin-top: 0.25rem;
`;

const Dropdown = (props: DropdownProps) => {
  const { error, placeholder, errorMessage, id, options, ...selectAttrs } =
    props;
  return (
    <Container>
      <div>
        <Select error={error} id={id} {...selectAttrs}>
          {options.map((option, index) => {
            return (
              <option value="option" key={`${index}-${option}`}>
                {option}
              </option>
            );
          })}
        </Select>
      </div>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Label htmlFor={id}>{placeholder}</Label>
    </Container>
  );
};

export default Dropdown;

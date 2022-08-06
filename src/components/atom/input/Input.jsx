import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder}></SInput>;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solod #ddd 1px;
  border-radius: 99999px;
  outline: none;
`;

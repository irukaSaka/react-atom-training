import styled from "styled-components";
import { BaseButton } from "./BaseButton";
export const PrimaryButton = (props) => {
  const { children } = props;
  return <Sbutton>{children}</Sbutton>;
};

const Sbutton = styled(BaseButton)`
  background-color: #40514e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

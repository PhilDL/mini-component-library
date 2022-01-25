import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    iconSize: 14,
    style: {
      "--padding-left": "22px",
      "--font-size": "14px",
    },
  },
  large: {
    iconSize: 18,
    style: {
      "--padding-left": "26px",
      "--font-size": "18px",
    },
  },
};
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  id = "",
}) => {
  const variant = SIZES[size];
  return (
    <InputControl>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <InputIcon id={icon} size={variant.iconSize} />
      <InputWrapper
        type="search"
        placeholder={placeholder}
        width={width}
        style={variant.style}
        id={id}
      ></InputWrapper>
    </InputControl>
  );
};

const InputIcon = styled(Icon)`
  position: absolute;
  left: 0px;
  bottom: 4px;
`;

const InputControl = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.input`
  border: none;
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  font-size: var(--font-size);
  border-bottom: 2px solid black;
  padding-left: var(--padding-left);
  outline-offset: 2px;
  padding-top: 4px;
  font-weight: 700;
  color: inherit;
  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;

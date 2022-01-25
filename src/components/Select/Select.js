import React, { Fragment } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectIcon id="chevron-down" />
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: min-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.select`
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  padding: 12px 52px 12px 16px;
  appearance: none;
  width: fit-content;
  font-weight: 400;
  color: inherit;
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 8px;
  top: 10px;
  // So we can click through the Icon, into the select and
  // focus the select.
  pointer-events: none;
`;
export default Select;

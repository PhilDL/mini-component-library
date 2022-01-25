/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--progress-bar-height": "8px",
    "--progress-bar-padding": "0",
    "--progress-bar-border-radius": "4px",
  },
  medium: {
    "--progress-bar-height": "12px",
    "--progress-bar-padding": "0",
    "--progress-bar-border-radius": "4px",
  },
  large: {
    "--progress-bar-height": "16px",
    "--progress-bar-padding": "4px",
    "--progress-bar-border-radius": "8px",
  },
};
const ProgressBar = ({
  value,
  size,
  valueText = "",
  valueMin = 0,
  valueMax = 100,
}) => {
  const styles = SIZES[size];
  let range = valueMax - valueMin;
  let percentage = ((value - valueMin) / range) * 100;
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;

  return (
    <ProgressBarWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={valueMin}
      aria-valuetext={valueText}
      aria-valuemax={valueMax}
      style={styles}
    >
      <FillerWrapper>
        <Filler value={percentage}></Filler>
      </FillerWrapper>
    </ProgressBarWrapper>
  );
};
const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px #80808059 inset;
  border-radius: var(--progress-bar-border-radius);
  padding: var(--progress-bar-padding);
`;
const FillerWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;
const Filler = styled.div`
  width: ${({ value }) => value}%;
  height: var(--progress-bar-height);
  background-color: ${COLORS.primary};
`;
export default ProgressBar;

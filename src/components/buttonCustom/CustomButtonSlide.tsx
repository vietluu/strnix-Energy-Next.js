import React, { JSX } from 'react';

const CustomButtonSlide = ({
  position,
  currentSlide,
  slideCount,
  children,
  ...props
}: any): JSX.Element => (
  <button {...props}>
    <i className={`fas fa-chevron-${position}`} />
  </button>
);

export default CustomButtonSlide;

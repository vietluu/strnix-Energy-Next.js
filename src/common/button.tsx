import React, {JSX} from 'react';

const Right = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any): JSX.Element => (
  <button {...props}>
    <i className='fas fa-chevron-right' />
  </button>
);
const Left = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any): JSX.Element => (
  <button {...props}>
    <i className='fas fa-chevron-left' />
  </button>
);

export { Right, Left };

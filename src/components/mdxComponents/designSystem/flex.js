import * as React from 'react';
import styled from '@emotion/styled';

const StyledFlex = styled('div')`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    display: block;
  }

  .styledClass {
    flex-basis: calc( 50% - 1em );
  }
`;

const FlexTag = ({ ...props }) => {
  console.log(props);
  return (
    <StyledFlex >
      {props.children}
    </StyledFlex>
  );
};

export default FlexTag;

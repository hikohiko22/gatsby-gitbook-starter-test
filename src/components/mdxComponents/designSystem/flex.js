import * as React from 'react';
import styled from '@emotion/styled';

const StyledFlex = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top:1em;
  @media (max-width: 767px) {
    display: block;
  }

  .styledClass {
    flex-basis: calc( 50% - .5em );
    align-self: streach;
    margin-bottom: 1em;
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

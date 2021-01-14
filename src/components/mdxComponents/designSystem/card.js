import * as React from 'react';
import styled from '@emotion/styled';

const StyledCard = styled('div')`
  border: solid 1px #aaa;
  border-radius: .25em;
  padding: 1em;
  margin: .5em;
`;

const FlexTag = ({ ...props }) => {
  console.log(props);
  return (
    <StyledCard className="styledClass">
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </StyledCard>
  );
};

export default FlexTag;

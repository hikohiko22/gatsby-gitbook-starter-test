import * as React from 'react';
import styled from '@emotion/styled';

const StyledCard = styled('div')`
  border: solid 1px #aaa;
  border-radius: .25em;
  padding: 1em;
  hr {
    margin: .5em 0;
  }
  p {
    margin-top:.5em;
  }
`;

const FlexTag = ({ ...props }) => {
  console.log(props);
  return (
    <StyledCard className="styledClass">
      { props.title && <div><h3>{props.title}</h3><hr /></div> }
      <p>{props.children}</p>
    </StyledCard>
  );
};

export default FlexTag;

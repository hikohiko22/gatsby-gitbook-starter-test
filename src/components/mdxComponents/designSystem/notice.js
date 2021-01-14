import * as React from 'react';
import styled from '@emotion/styled';
import * as Icons from 'styled-icons/fa-solid'

const StyledNotice = styled('div')`
  border-radius: .25em;
  background: #ffdddd;
  padding: 1em;
  hr {
    margin: .5em 0;
  }
  p:not(:first-child) {
    margin-top:.5em;
  }
  svg {
    width: 1em;
    margin-right: .5em;
  }
`;

const NoticeTag = ({ ...props }) => {
  console.log(props);
  return (
    <StyledNotice className="styledNotice">
      { props.title && 
        <div>
          <h3>
            <Icons.InfoCircle />
            {props.title}
          </h3>
          <hr />
        </div> }
      <p>{props.children}</p>
    </StyledNotice>
  );
};

export default NoticeTag;

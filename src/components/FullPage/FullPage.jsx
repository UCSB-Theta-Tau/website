import React from 'react';
import { FullPageContainer, FullPageTitle, FullPageSubtitle } from './FullPage.styles';

const FullPage = (props) => (
  <FullPageContainer background={props.background}>
    <FullPageTitle>
      {props.title}
    </FullPageTitle>
    {props.subtitle ? (
      <FullPageSubtitle>
        {props.subtitle}
      </FullPageSubtitle>
    ) : null}
  </FullPageContainer>
);

export { FullPage };

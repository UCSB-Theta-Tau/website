import React from 'react';
import {
  FullPageContainer, FullPageTitle, FullPageSubtitle, FullPageText,
} from './FullPage.styles';

const FullPage = (props) => (
  <FullPageContainer background={props.background}>
    <FullPageTitle>
      {props.title}
    </FullPageTitle>
    <FullPageSubtitle>
      {props.subtitle}
    </FullPageSubtitle>
    <FullPageText>
      {props.subtext}
    </FullPageText>
  </FullPageContainer>
);

export { FullPage };

import React from 'react';
import {
  FullPageContainer, FullPageTitle, FullPageSubtitle, FullPageText,
} from './FullPage.styles';

const FullPage = (props) => (
  <FullPageContainer img={props.img ? `url(${process.env.PUBLIC_URL + props.img})` : 'none'} color={props.color ? props.color : 'white'}>
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

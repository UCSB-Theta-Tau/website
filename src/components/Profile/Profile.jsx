import React from 'react';
import { ProfileContainer, ProfileName, ProfilePicture } from './Profile.styles';

const Profile = (props) => (
  <ProfileContainer>
    <ProfilePicture class={props.class} image={props.image} />
    <ProfileName>{props.name}</ProfileName>
  </ProfileContainer>
);

export { Profile };

import React from 'react';
import { ClassContainer, ClassName, ProfilesContainer } from './Class.styles';
import { Profile } from '..';

const Class = (props) => (
  <ClassContainer>
    <ClassName>
      {`${props.name} Class`}
    </ClassName>
    <ProfilesContainer>
      {
        props.actives.map((profile) => (
          <Profile class={props.name} image={profile.image} name={profile.name} />
        ))
    }
    </ProfilesContainer>
  </ClassContainer>
);

export { Class };

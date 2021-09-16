import React, { useState } from 'react';
import {
  PillarContainer, PillarImg, PillarCard, PillarTitle, PillarText,
} from './Pillar.styles';

const Pillar = (props) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(true);
  };

  const handleRevert = () => {
    setFlipped(false);
  };

  return (
    <PillarContainer isFlipped={flipped} flipDirection="horizontal">
      <PillarCard onClick={handleFlip}>
        <PillarImg src={`${process.env.PUBLIC_URL}/static/${props.pillar}.png`} alt={props.pillar} />
      </PillarCard>
      <PillarCard onClick={handleRevert}>
        <PillarTitle>
          {props.pillar}
        </PillarTitle>
        <PillarText>
          {props.text}
        </PillarText>
      </PillarCard>
    </PillarContainer>
  );
};

export { Pillar };

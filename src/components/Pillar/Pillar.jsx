import React, { useState } from 'react';
import { PillarContainer, PillarImg } from './Pillar.styles';

const Pillar = (props) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(true);
  };

  //   const handleRevert = () => {
  //     setFlipped(false);
  //   };

  return (
    <PillarContainer isFlipped={flipped} flipDirection="horizontal">
      <PillarImg src={`${process.env.PUBLIC_URL}/static/${props.pillar}.png`} alt={props.pillar} onClick={handleFlip} />
      <div />
    </PillarContainer>
  );
};

export { Pillar };

/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useResizeAware from 'react-resize-aware';
import { StyledFaq, StyledFaqsList } from './QandA.styles';

const QandA = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const [resizeListener, { height }] = useResizeAware();
  const animProps = useSpring({
    height: isOpen ? height : 0,
    opacity: isOpen ? 1 : 0,
  });
  return (
    <StyledFaqsList>
      {props.data.map((row) => (
        <StyledFaq onClick={() => toggleOpen(!isOpen)}>
          <Question question={row.question} answerId={row.id} />
          <Answer
            answer={row.answer}
            answerId={row.id}
            anim={animProps}
            resize={resizeListener}
          />
        </StyledFaq>
      ))}
    </StyledFaqsList>
  );
};

const Question = (props) => (
  <>
    <div className="FAQ__question">{props.question}</div>
  </>
);

const Answer = (props) => (
  <>
    <animated.div className="faq-answer" style={props.anim}>
      <span style={{ position: 'relative' }}>
        {props.resize}
        {props.answer}
      </span>
    </animated.div>
  </>
);

export { QandA };

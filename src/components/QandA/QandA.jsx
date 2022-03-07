import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useResizeAware from 'react-resize-aware';
import { StyledFaq } from './QandA.styles';

const QandA = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const [resizeListener, { height }] = useResizeAware();
  return (
    <StyledFaq onClick={() => toggleOpen(!isOpen)}>
      <Question question={props.question} id={props.id} />
      <Answer
        answer={props.answer}
        id={props.id}
        height={height}
        open={isOpen}
        resize={resizeListener}
      />
    </StyledFaq>
  );
};

const Question = (props) => (
  <>
    <div className="FAQ__question">{props.question}</div>
  </>
);

const Answer = (props) => {
  const animProps = useSpring({
    height: props.open ? props.height : 0,
    opacity: props.open ? 1 : 0,
  });
  return (
    <>
      <animated.div className="FAQ_answer" style={animProps}>
        <span style={{ position: 'relative' }}>
          {props.resize}
          {props.answer}
        </span>
      </animated.div>
    </>
  );
};

export { QandA };

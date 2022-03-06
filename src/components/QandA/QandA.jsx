import React, { useState } from 'react';
import { StyledFaq } from './QandA.styles';

const QandA = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <StyledFaq onClick={() => toggleOpen(!isOpen)}>
      {
        (props).rows.map((row) => (
          <>
            <Question
              question={row.question}
              isOpen={isOpen}
              onClick={toggleOpen}
              answerId={row.id}
            />
            <Answer
              answer={row.answer}
              isOpen={isOpen}
              onClick={toggleOpen}
              answerId={row.id}
            />
          </>
        ))
     }
    </StyledFaq>
  );
};

const Question = (props) => (
  <>
    <dt>
      <button
        type="button"
        className="FAQ__question"
        aria-expanded={props.open}
        aria-controls={props.answerId}
        onClick={props.onToggle}
      >
        {props.question}
      </button>
    </dt>
  </>
);

function isOpenClass(open) {
  if (open === true) {
    return 'FAQ_answer';
  }
  return 'FAQ_answer_hidden';
}

const Answer = (props) => (
  <>
    <dd>
      <p className={isOpenClass(props.open)} id={props.id}>
        {props.answer}
      </p>
    </dd>
  </>
);

export { QandA };

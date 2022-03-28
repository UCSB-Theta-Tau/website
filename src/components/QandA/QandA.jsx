import React from 'react';

const Question = (props) => (
  <>
    <dt>
      <button
        type="button"
        className="FAQ__question"
        aria-expanded={props.isOpen}
        aria-controls={props.answerId}
        onClick={props.onToggle}
      >
        {props.question}
      </button>
    </dt>
  </>
);

function isOpen(open) {
  if (open === true) {
    return 'FAQ_answer';
  }
  return 'FAQ_answer_hidden';
}

const Answer = (props) => (
  <>
    <dd>
      <p className={isOpen(props.isOpen)} id={props.id}>
        {props.answer}
      </p>
    </dd>
  </>
);

export { Question, Answer };

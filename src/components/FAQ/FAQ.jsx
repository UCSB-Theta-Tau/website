import React from 'react';
import { Question, Answer } from '../QandA';

const FAQ = (props) => {
  const [open, setIsOpen] = useState([]);
  const isOpen = false;
  const onToggle = () => {
    if (open.includes()) {
      setIsOpen(open.filter((item) => item !== index));
    } else {
      setIsOpen([...open, index]);
    }
  };
  {
    props.rows.map(
      (rows) => (
        (
          <Question
            question={rows.question}
            isOpen={isOpen}
            onToggle={onToggle}
            answerId={rows.id}
          />
        ),
        (<Answer answer={rows.answer} isOpen={isOpen} onToggle={onToggle} id={rows.id} />)
      ),
    );
  }
};

export { FAQ };

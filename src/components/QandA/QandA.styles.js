import styled from 'styled-components';

export const StyledFaq = styled.div`
  cursor: pointer;
  margin: 0 0 10px;

  div.FAQ__question {
    font-size: 125%;
    font-weight: 800;
    margin: 0 0 5px;
  }

  div.FAQ_answer {
    background: #fff;
    overflow: hidden;

    span {
      display: block; 
      padding: 20px 10px;
    }
  }
`;

export const StyledFaqsList = styled.div`
  background: #efefef;
  margin: 20px 0;
  padding: 1rem;
`;

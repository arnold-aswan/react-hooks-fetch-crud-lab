import React from "react";

function QuestionItem({ question, onDelete }) {
  console.log(question);
  const { id, prompt, answers, correctIndex } = question;

  const handleDelete = () => {
    // console.log(question);
    try {
      fetch(`http://localhost:4000/questions/${question.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => console.log(question))
        .then(() => onDelete(question));
    } catch (error) {
      console.log(error);
    }
  };
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ quizes, onDelete }) {
  console.log(quizes);
  console.log(quizes);
  // const question = questions.map((question) => (
  //   <QuestionItem question={question} key={question.id} onDelete={onDelete} />
  // ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* display QuestionItem components here after fetching */}
      <ul>
        {quizes.map((item) => (
          <QuestionItem question={item} key={item.id} onDelete={onDelete} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

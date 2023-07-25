import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:4000/questions")
        .then((r) => r.json())
        .then((questions) => setQuestions(questions));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDeletedQuestion = (deletedQuestion) => {
    console.log(deletedQuestion);
    const updatedQuestions = questions.filter(
      (question) => question.id !== deletedQuestion.id
    );
    setQuestions(updatedQuestions);
  };

  const handleNewQuestion = (newQuestion) => {
    console.log(newQuestion);
    console.log(questions);
    setQuestions([...questions, newQuestion]);
  };
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuiz={handleNewQuestion} />
      ) : (
        <QuestionList quizes={questions} onDelete={handleDeletedQuestion} />
      )}
    </main>
  );
}

export default App;

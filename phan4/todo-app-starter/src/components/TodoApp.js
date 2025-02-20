import React from "react";
import Header from "../components/layout/Header";
class TodoApp extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
export default TodoApp;

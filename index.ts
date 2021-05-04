import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then((res) => {
  const todo = res.data as Todo;

  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
        Todo with ID: ${id}
        Title: ${title}
        Is Finished: ${completed}
    `);
};

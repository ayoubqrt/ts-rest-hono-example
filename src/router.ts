// router.ts
import { initServer } from "ts-rest-hono";
import { contract } from "./contract";

const s = initServer();

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

// Database
const todos: Todo[] = [];

export const router = s.router(contract, {
  getTodos: async () => {
    return {
      status: 201,
      body: todos,
    };
  },
  createTodo: async ({ body: { completed, title } }) => {
    const newTodo = {
      id: "123",
      title,
      completed,
    };

    todos.push(newTodo);

    return {
      status: 201,
      body: newTodo,
    };
  },
});

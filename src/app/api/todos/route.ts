import { NextResponse } from "next/server";

const DATA_SOURCE = "https://jsonplaceholder.typicode.com/todos";

interface Todo {
  // Define the properties of the Todo type here
}

export async function GET() {
  const res = await fetch(DATA_SOURCE);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

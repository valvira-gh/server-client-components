import styles from './server.module.css';

const ServerSide: React.FC = async () => {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => data as any[]);
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  return (
    <div className="container">
      <h3 className="title">Server-Side Component</h3>
      <ul className="todos-list">
        {todos.map((todo) =>
          todo.id <= 10 ? (
            <li key={todo.id} className="list-item">
              <span>{todo.id}.</span> {todo.title}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ServerSide;

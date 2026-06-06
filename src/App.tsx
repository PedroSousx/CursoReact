import { useState } from "react";

export function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: 1, text: "Fazer Café" },
    { id: 2, text: "Fazer Almoço" },
    { id: 3, text: "Fazer Jantar" },
  ]);

  return (
    <div>
      <input type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
        <button onClick={() => (setList([
          ...list,
          { id: list.length + 1, text: value }
        ]))}>
          Adicionar
      </button>
      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.text}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;

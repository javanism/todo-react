import  {useState}   from 'react';

function App() {

  const [todos, setTodos ]=useState([]);
  const [inputValue, setInputValue]=useState('');

  

  const addTodo= ()=>{
    if(inputValue){
      setTodos([...todos,inputValue]);
      setInputValue('');
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input  onChange={(event)=>setInputValue(event.target.value)}   placeholder="할 일을 입력하세요"  value={inputValue}></input>
      <button onClick={addTodo}>추가!!!</button>
      <ul>
        {
          todos.map((todo,index)=><li key={index}>{todo}</li>)
        }
      </ul>
     
    </div>
  );
}

export default App;

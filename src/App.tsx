import { useState } from "react"
import { InputAdd } from "./components/inputAdd";
import { TodoItem } from "./components/todoItem";

export function App() {
  const [isList, setList] = useState([
    {id: '1', label: 'Fazer café', complete: false},
    {id: '2', label: 'Fazer almoço', complete: false},
    {id: '3', label: 'Fazer janta', complete: false}
  ])

  const handleAddInput = (value : string) => {
    setList([ 
          ...isList, 
          { id: (isList.length + 1).toString(), complete: false, label: value}
        ])
  }


    return (
     <main>

      <InputAdd onAdd={handleAddInput}/>

      <ol>
        {isList.map((listItem) => (

          <TodoItem
            key={ listItem.id }

            id={ listItem.id }
            label={ listItem.label }   
            complete={ listItem.complete }  
            
            onComplete={() => setList([
              ...isList.map(item => ({ 
              ...item, 
              complete: item.id === listItem.id ? true : item.complete
            }))])}

            onRemove={() => setList([
              ...isList.filter(item => item.id !== listItem.id)])}
          />
          

        ))}
      </ol>
     </main>
    )
  } 

import { useState } from "react";
import TodoBanner from "./TodoBanner";
import TodoRow from "./TodoRow";
import TodoCreator from "./TodoCreator";

export default function ToDoContainer() {
    let name = "Rishi"
    const todolist = [
        { action: "Attend Meeting", done: true },
        { action: "Buy Flowers", done: false },
        { action: "Book Train Tickets ", done: false },
        { action: "Go to Gym", done: false },
    ];

    const [todoItems, setTodoItems] = useState(todolist)

    //Toggle the done status every time the checked event is triggered from the tr element

    const addNewTodoItem = (newItem) => {
        if (!todoItems.find(x => x.action === newItem)) {
            setTodoItems([...todoItems, { action: newItem, done: false }])
        }
    }

    const toggleTodo = (item) => setTodoItems(
        todoItems.map(x => x.action === item.action ? { ...x, done: !x.done } : x)
    )

    //Call the array.map method to generate TodoRow for every element in the todoitems 
    const generateTodoRow = todoItems.map((x, i) => <TodoRow key={i} item={x} callback={toggleTodo} />)

    return <>
        <TodoBanner name={name} tasks={todoItems} />
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                {generateTodoRow}
            </tbody>

        </table>
        <TodoCreator callback={addNewTodoItem} />
    </>
}
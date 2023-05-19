import React, {useReducer, useState} from 'react'

// syntax reducer =>const [state, dispatch] = useReducer(<reducer>, <initialState>)

// contoh 1
const NameList = () => {
    // reducer
    const [listName, dispatch] = useReducer(
        (state, action) => {
            // eslint-disable-next-line default-case
            switch (action.type) {
                case "SET_NAME":
                    return {...state, name: action.payload};
                case "ADD_NAME":
                    return  {
                        ...state,
                        names: [...state.names, state.name],
                        name: "",
                    };
            }
        }, {
            names: ["Mike", "Jake"], 
            name: ""
        }
    );

    return (
        <div>
            <>
                {listName.names.map((name, index) => (
                    <div key={index}>{name}</div>
                    ) 
                )}
            </>

            <input 
                type='text'
                value={listName.name}
                onChange={(e) => 
                    dispatch({type: "SET_NAME", payload: e.target.value})
                }
            />

            <button onClick={() => dispatch({type: "ADD_NAME"})}>Add Name</button>
        </div>
    )
};


// Contoh 2

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {...todo, complete: !todo.complete};
                } else {
                    return todo;
                }
            });
        default: return state;
    }
}

const initialTodos = [
    {
        id: 1,
        title: "Learning useReducer",
        complete: false,
    },
    {
        id: 2,
        title: "Learning useState",
        complete: true,
    },
];


const Todos = () => {
    // state
    const [todos, dispatch] = useReducer(reducer, initialTodos)
    
    // handler
    const handlerComplete = (todo) => {
        dispatch({type: "COMPLETE", id: todo.id});
    };

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input 
                            type="checkbox"
                            checked={todo.complete} 
                            onChange={() => handlerComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </div>
    )
}


// contoh 3

const UserForm = () => {
    // reducer
    const [state, dispatch] = useReducer(
        (state, action) => ({
            ...state,
            ...action,
        }), {
            first: " ",
            last: " ",
        }
    )


    return (
        <div>
            <input 
                type="text"
                value={state.first}
                placeholder='Your first name'
                onChange={(e) => dispatch({first: e.target.value})} 
            />

            <input
                type="text"
                value={state.last}
                placeholder='Your last name'
                onChange={(e) => dispatch({last: e.target.value})}
            />

            <h3>First Name: {state.first}</h3>
            <h3>Last Name: {state.last}</h3>
        </div>
    )
}

// contoh 4

const reducer2 = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText};
        case "toggleShowText":
            return {count: state.count, showText: !state.showText}
        default:
            return state;
    }
};

const ShowText = () => {
    // state
    const [state, dispatch] = useReducer(reducer2, { count: 0, showText: true });
    
    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT"});
                    dispatch({ type: "toggleShowText"});
                }}
            >
                Click Here
            </button>

            {state.showText && <p>I'm Here</p>}
        </div>
    )
}


// contoh 5

// component AddTask (child component)
const AddTask = ({onAddTask}) => {
    // state
    const [text, setText] = useState("");

    return(
        <>
            <input 
                placeholder='Add Task'
                value={text}
                onChange={e => setText(e.target.value)}
            />

            <button
                onClick={() =>{
                    setText("");
                    onAddTask(text);
                }}
            >ADD</button>
        </>
    )
};

// component TaskList (child component)
const TaskList  = ({task, onChangeTask, onDeleteTask}) => {
    
    return (
        <ul>
            {task.map(task => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
};

const Task= ({task, onChange, onDelete}) => {
    // state
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input 
                    value={task.text}
                    onChange={e => {onChange({...task, text: e.target.value})}}
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }

    return (
        <label>
            <input 
                type='checkbox'
                checked={task.done}
                onChange={e => {onChange({...task, done: e.target.value})}}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </label>
    );
}



// Function Reducer 
const taskReducer = (task, action) => {
    switch (action.type) {
        case "ADDED": {
            return [...task, {
                id: action.id,
                text: action.text,
                done: false,
            }];
        }
        case "CHANGED": {
            return task.map(e  => {
                if (e.id === action.task.id){
                    return action.task;
                } else {
                    return e;
                }
            });
        }
        case "DELETED": {
            return task.filter(e => e.id !== action.id);
        }
        default: {
            throw Error("Unkwon action" + action.type);
        }
    }
}

let nextId = 3;
const initialTasks = [
    {id: 0, text: "Visit Monas", done: true},
    {id: 1, text: "Visit Ancol", done: false},
    {id: 2, text: "Visit TMII", done: false},
]


// parent Component

const TaskApp = () => {
    // state
    const [task, dispatch] = useReducer(taskReducer, initialTasks)

    // handle
    const handleAddTask = (text) => {
        dispatch({
            type: "ADDED",
            id: nextId++,
            text: text,
        });
    };

    const handleChangeTask = (task) => {
        dispatch({
            type: "CHANGED",
            task: task,
        });
    };

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: "DELETED",
            id: taskId,
        });
    };

    return (
        <div>
            <h1>Your Task</h1>
            <AddTask
                onAddTask={handleAddTask}
            />
            <TaskList
                task={task}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    )
}


// Parent Componenet
export const ReducerTutorial = () => {
  return (
    <div>
        <h2>Contoh 1 - Add Name into List</h2>
        <NameList/>
        <br/>
        <h2>Contoh 2 - Todos</h2>
        <Todos/>
        <br/>
        <h2>Contoh 3 - Full Name</h2>
        <UserForm/>
        <br/>
        <h2>Contoh 4 - Show Text & Increment</h2>
        <ShowText/>
        <br/>
        <h2>Contoh 5 - My Task</h2>
        <TaskApp/>
    </div>
  )
}

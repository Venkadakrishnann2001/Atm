// import Admission from "./mca course"
// export default function App(){
//   return(
//     <Admission/>
//   )
// }
 import Assignmentatm from "./unit5/Atm"
 export default function App(){
   return(
    <Assignmentatm/>
  )
 }

// import BasicExample from "./form"
// import "./mca 1 "
// import { BrowserRouter,Routes,Route } from "react-router-dom"


// import'./App.css';
// import Mca from "./mca 1 ";
// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<BasicExample />}/>
//       <Route path="/mca 1" element={<Mca />}/>
//     </Routes>
//     </BrowserRouter>
//   );
// }

// import Admission from "./course Admission"
// export default function App(){
//   return(
//     <Admission/>
//   )
// }
// import TodoForm from "./form"
// export default function App(){
//   return(
//     <TodoForm/>
//   )
// }

// import {usestate} from "react";
// import TodoForm from"./form.js";

// export default function App(){
//     const [todos,setTodos]=usestate([
//         {
//             text:"learn react",
//             iscompleted:false
//         },
//         {
//             text:"meet friend for lunch",
//             iscompleted:false 
//         },
//         {
//             text:"build todo app",
//             iscompleted:false 
//         }
//     ]);
//     const addTodo=(text)=>{
//         const newTodos=[...todos,{text:text,iscomplete:false}];
//         setTodos(newTodos);
//     };
//     const removeTodo=(e)=>{
//         var index=Number(e.target.id);
//         let temp=[...todos];
//         temp.splice(index,1);
//         setTodos(temp);
//     };
//     return(
//         <>
//         {todos.map((todo,i) =>(
//             <div className="todo"key={i} id={i}onClick={removeTodo}>{todo.text}
//             </div>
//             ))}
//             <TodoForm addTodo={addTodo} />
//             </>
//     );
// }
// import React,{useState, useEffect} from 'react';
// import './App.css';

// function App() {
//   const [currentSum,setCurrentSum]=useState(0);
//   const [clear,setClear]=useState(false);

//   useEffect(()=>{
//     document.querySelector('#result').value="";
//   },[])
  
//   useEffect(()=>{
//     if(clear)
//     document.querySelector('#result').value="";
//   })

//   const Add=(e)=>{
//     e.preventDefault();
//     if(clear) setClear(false);
//     let currentNum=document.querySelector('#num').value
//     if(currentNum=='')
//     return;
//     let sum= currentSum+parseInt(currentNum);
//     setCurrentSum(sum);
//     document.querySelector('#num').value="";
      
//   }

//   const Clear=(e)=>{
//     e.preventDefault();
//     console.log('sum:', currentSum);
//     document.querySelector('form').reset();
//     setClear(true);
//     setCurrentSum(0);
//   }

//   return (
//     <div className="App">
//       <div className="app-title">
//         <h1> Basic Form Calculator</h1>
//       </div>
//       <form>
//             <input type="text" id="result" value={currentSum}  readOnly />   
//             <input type="text" id="num" placeholder="enter a number" />
//             <button onClick={Add}>Add</button>
//             <button onClick={Clear}>Clear</button>
//       </form>
//     </div>
//   );
// }

// export default App;

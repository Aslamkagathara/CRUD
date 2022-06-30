import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';


function App() {
  return (
    
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <Create />
      <Read />
      <Update/>
    </div>
   
  );
}

export default App;






// function App() {
//   return (
//     <Router>
//       <div className="main">
//         <h2 className="main-header">React Crud Operations</h2>
//         <div>
//           <Route exact path='/create' component={Create} />
//         </div>
//         <div style={{ marginTop: 20 }}>
//           <Route exact path='/read' component={Read} />
//         </div>

//         <Route path='/update' component={Update} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// export default function App(){
//   return(
//       <Router>
//           <header>
//           <div className="container">
//               <ul className="nav">
//                   <li>
//                       <Link to="/">Create</Link>
//                   </li>
//                   <li>
//                       <Link to="/read">Read</Link>
//                   </li>
//                   <li>
//                       <Link to="/update">Update</Link>
//                   </li>
//               </ul>
//       </div>
//       </header>


//       <div className="site-main">
//               <Routes>
//                   <Route exact path="/" element={<Create />} />
                      
//                   <Route path="/read" element={<Read />} />
      
//                   <Route path="/update" element={<Update />} />
                      
//               </Routes>
//           </div>
//       </Router>
//   );
// }
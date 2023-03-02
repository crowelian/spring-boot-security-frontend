import React from "react";
import { render } from "react-dom";
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById("root");
render(<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</React.StrictMode>, root);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     
    
//   </React.StrictMode>,
// )

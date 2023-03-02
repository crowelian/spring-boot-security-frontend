import React from "react";
import { render } from "react-dom";
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './utils/ErrorBoundary';

const root = document.getElementById("root");
render(<React.StrictMode>
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
  
  
</React.StrictMode>, root);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ErrorBoundary>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ErrorBoundary>
    
    
//   </React.StrictMode>,
// )

import React from 'react';
import MovieApp from './components/MovieApp';

const App = () => {
  return (
   
      <div className="App">
            <MovieApp />
      </div>
    
  );
};

export default App;

/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';           // Make sure this path is correct
import MovieApp from './components/MovieApp';     // This is your home page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MovieApp />} />
      </Routes>
    </Router>
  );
};

export default App;
*/

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/login';

// function App() {
//   const [user, setUser] = useState(null);

//   const loginUser = (userData) => {
//     setUser(userData);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login onLogin={loginUser} />} />
//         <Route path="/" element={<div>{user ? `Welcome, ${user.username}!` : 'Please log in.'}</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/login';  // Import Login Component
// import './App.css';

// function App() {
//   const [user, setUser] = useState(null);  // State to store user info after login

//   const loginUser = (userData) => {
//     setUser(userData);  // Store user information after login
//   };

//   return (
//     <Router>
//       <div className="App">
//         {/* Routes Configuration */}
//         <Routes>
//           <Route
//             path="/"
//             element={
//               user ? (
//                 <div>Welcome, {user.username}!</div>  // Show the home page content if logged in
//               ) : (
//                 <div>Please log in.</div>  // Display login prompt if not logged in
//               )
//             }
//           />
//           <Route path="/login" element={<Login onLogin={loginUser} />} />  {/* Login Route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




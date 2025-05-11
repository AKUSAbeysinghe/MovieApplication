import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();  // Use useNavigate hook for redirection

  // Hardcoded credentials for the demo
  const correctUsername = 'URU';
  const correctPassword = 'Abc';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === correctUsername && password === correctPassword) {
      setError('');
      navigate('/home');  // Redirect to the home page (main page) after successful login
    } else {
      setError('Invalid Credentials, please try again!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        {error && <p className="error-message">{error}</p>}  {/* Display error message if credentials are incorrect */}
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;


// import React, { useState } from 'react';
// import './login.css';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add login validation logic here
//     if (username === 'user' && password === 'password') {
//       onLogin({ username });
//       setError('');
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//         {error && <div className="error-message">{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import './login.css';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation logic (replace with your logic)
//     if (username === 'user' && password === 'password') {
//       onLogin({ username });  // Trigger login and pass the user info
//       setError('');
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//         {error && <div className="error-message">{error}</div>}  {/* Show error message if login fails */}
//       </form>
//     </div>
//   );
// };

// export default Login;


// src/components/Login.js
// import React, { useState } from 'react';

// function Login({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Dummy login check
//     if (username === 'admin' && password === 'admin') {
//       onLogin(); // Calls a function passed from App to switch screens
//     } else {
//       alert('Invalid credentials!');
//     }
//   };

//   return (
//     <div style={{ marginTop: '100px' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         /><br/><br/>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         /><br/><br/>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

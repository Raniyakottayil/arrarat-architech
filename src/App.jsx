
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login'; 
import Home from './pages/Home';
import Todo from './components/Todo';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route
        path="/todo"
        element={
          <ProtectedRoute>
            <Todo /> 
          </ProtectedRoute>
        }
      />
    </Routes>
   
  );
}

export default App;



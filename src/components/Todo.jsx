import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login');
    });
  };


  

  return (
    <div className='bg-blue-600'>
      <h1 className='text-center text-3xl text-blue-950'>Welcome to Todo Page</h1>
      <button className="bg-black p-2 text-white " onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Todo;

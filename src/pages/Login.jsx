import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      navigate('/todo');
    } catch (err) {
      alert(err.message);
    }
  };
return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
				<h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

				<input
					type="email"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full mb-4 px-4 py-2 border rounded"
					required
				/>

				<input
					type="password"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="w-full mb-6 px-4 py-2 border rounded"
					required
				/>

				<button
					className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition"
					onClick={handleLogin}
				>
					Login
				</button>
			</div>
		</div>
  )
};

export default Login



 


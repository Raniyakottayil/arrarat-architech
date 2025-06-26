import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from 'react-router-dom';

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			alert("Registration Successful");
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
				<h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

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
					onClick={handleRegister}
				>
					Register
				</button>
                <p className="mt-4">
				Already have an account?{" "}
				<Link to="/login" className="text-blue-600 underline">
					Sign In
				</Link>
			</p>
			</div>
           
		</div>
	);
};

export default Register;

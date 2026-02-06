import { useState } from "react";
import "./Auth.css";

const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" });
	};

	const validate = () => {
		const newErrors = {};

		if (!isLogin && !form.name.trim()) {
			newErrors.name = "Please enter your name";
		}

		if (!form.email.includes("@")) {
			newErrors.email = "Enter a valid email address";
		}

		if (form.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = () => {
		if (!validate()) return;

		alert(isLogin ? "Login successful 🎉" : "Account created 🚀");
	};

	return (
		<div className="auth-container">
			<div className={`auth-card ${isLogin ? "login" : "register"}`}>
				<h2>{isLogin ? "Welcome back 👋" : "Create account 🚀"}</h2>
				<p className="subtitle">
					{isLogin
						? "Glad to see you again"
						: "Join us in just a minute"}
				</p>

				{!isLogin && (
					<>
						<input
							className={errors.name ? "error" : ""}
							type="text"
							name="name"
							placeholder="Full name"
							value={form.name}
							onChange={handleChange}
						/>
						{errors.name && (
							<span className="error-text">{errors.name}</span>
						)}
					</>
				)}

				<input
					className={errors.email ? "error" : ""}
					type="email"
					name="email"
					placeholder="Email address"
					value={form.email}
					onChange={handleChange}
				/>
				{errors.email && (
					<span className="error-text">{errors.email}</span>
				)}

				<input
					className={errors.password ? "error" : ""}
					type="password"
					name="password"
					placeholder="Password"
					value={form.password}
					onChange={handleChange}
				/>
				{errors.password && (
					<span className="error-text">{errors.password}</span>
				)}

				<button className="auth-btn" onClick={handleSubmit}>
					{isLogin ? "Login" : "Register"}
				</button>

				<p className="toggle-text">
					{isLogin ? "New here?" : "Already have an account?"}
					<span onClick={() => setIsLogin(!isLogin)}>
						{isLogin ? " Create account" : " Login"}
					</span>
				</p>
			</div>
		</div>
	);
};

export default Auth;

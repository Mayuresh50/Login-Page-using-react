import { useState } from "react";
import "./Auth.css";

const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="auth-container">
			<div className="auth-card">
				<h2>
					{isLogin ? "Welcome back 👋" : "Let’s get you started 🚀"}
				</h2>
				<p className="subtitle">
					{isLogin
						? "Glad to see you again. Please login."
						: "Create your account in just a minute."}
				</p>

				{!isLogin && <input type="text" placeholder="Full name" />}

				<input type="email" placeholder="Email address" />

				<div className="password-box">
					<input
						type={showPassword ? "text" : "password"}
						placeholder="Password"
					/>
					<span onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? "🙈" : "👁️"}
					</span>
				</div>

				{isLogin && (
					<div className="extra-row">
						<label>
							<input type="checkbox" /> Remember me
						</label>
						<span className="forgot">Forgot?</span>
					</div>
				)}

				<button className="auth-btn">
					{isLogin ? "Login" : "Create Account"}
				</button>

				<p className="toggle-text">
					{isLogin ? "New here?" : "Already have an account?"}
					<span onClick={() => setIsLogin(!isLogin)}>
						{isLogin ? " Create an account" : " Login instead"}
					</span>
				</p>
			</div>
		</div>
	);
};

export default Auth;

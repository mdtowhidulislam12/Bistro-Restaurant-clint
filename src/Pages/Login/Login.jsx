import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Lottie from 'lottie-react';
import lottieLogin from '/login.json';
import { useAuth } from '../../ContextProvider/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { login,googleLogin } = useAuth(); // Access login method from AuthContext
    const navigate = useNavigate(); // Initialize navigate hook

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        setError(null);
        setLoading(true);

        try {
            await login(email, password); // Log in the user
            navigate('/'); // Redirect to home page
        } catch (err) {
            setError(err.message || 'Failed to log in');
        } finally {
            setLoading(false);
        }
    };


    const handleGoogleLogin = async () => {
        setError(null);
        setLoading(true);

        try {
            await googleLogin();
            navigate("/");
        } catch (err) {
            setError(err.message || "Failed to log in with Google");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="hero bg-base-200 min-h-screen pt-24">
            <div className="hero-content flex-col md:flex-row md:gap-40">
                <div className="text-center lg:text-left">
                    <Lottie loop={true} animationData={lottieLogin}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="text-center font-bold text-3xl">
                            <h2>Log In</h2>
                        </div>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                className={`btn bg-orange-400 ${loading ? 'loading' : ''}`}
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                        <button onClick={handleGoogleLogin} className='btn my-4'>Continue with<FcGoogle></FcGoogle></button>
                        <div className="flex py-4 justify-between items-center">
                            <p>New here? please...</p>
                            <Link to={'/register'}>
                                <button className="btn btn-link">Register Now!</button>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

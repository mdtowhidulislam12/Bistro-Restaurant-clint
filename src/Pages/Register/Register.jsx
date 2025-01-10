import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Correct import
import lottie from '/register.json';
import { useAuth } from '../../ContextProvider/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { signup, googleLogin } = useAuth(); // Access signup method from AuthContext
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate =useNavigate()

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await signup(formData.email, formData.password);
            alert('Account created successfully!');
            console.log('Account created:', formData);
        } catch (err) {
            setError(err.message || 'Failed to create account');
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

    return (
        <div className="hero bg-base-200 min-h-screen pt-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Animation */}
                <div className="text-center lg:text-left max-w-xl">
                    <Lottie loop={true} animationData={lottie}></Lottie>
                </div>

                {/* Registration Form */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="text-3xl font-bold text-center">
                            <h2>Register</h2>
                        </div>

                        <button onClick={handleGoogleLogin} className='btn my-4'>Continue with<FcGoogle></FcGoogle></button>

                        {/* Full Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Type your name"
                                className="input input-bordered"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className={`btn ${loading ? 'btn-disabled' : 'bg-orange-400'}`}
                                disabled={loading}
                            >
                                {loading ? 'Creating account...' : 'Create account'}
                            </button>
                        </div>



                        



                        {/* Redirect to Login */}
                        <div className="flex py-4 justify-between items-center">
                            <p>Already have an account? Please...</p>
                            <Link to="/login">
                                <button className="btn btn-link uppercase">Login!</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

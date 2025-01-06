import React from 'react';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import lottieLogin from '/login.json'

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen pt-24">
            <div className="hero-content flex-col md:flex-row md:gap-40">
                <div className="text-center lg:text-left">
                    <Lottie loop={true} animationData={lottieLogin}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">

                        <div className='text-center font-bold text-3xl'>
                            <h2>Log In</h2>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-400">Login</button>
                        </div>
                        <div className='flex py-4 justify-between items-center'>
                            <p>New here? please..</p>
                        <Link to={'/register'}><button className='btn btn-link'>Register Now!</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
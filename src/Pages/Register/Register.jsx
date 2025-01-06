import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import lottie from '/register.json';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen pt-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-xl">
                    <Lottie loop={true} animationData={lottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className='text-3xl font-bold text-center'>
                            <h2>Register</h2>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Type your name" className="input input-bordered" required />
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
                            <button className="btn bg-orange-400">Create account</button>
                        </div>
                        <div className='flex py-4 justify-between items-center'>
                            <p>Alrady have an account? please..</p>
                        <Link to={'/login'}><button className='btn btn-link uppercase'>Login! </button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
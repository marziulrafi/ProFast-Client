import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        //console.log(data);
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Please Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input
                            type="email"
                             {...register('email', { required: true })}
                            className="input" placeholder="Email" />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500 font-bold'>Email is required</p>
                        }

                        <label className="label">Password</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: true,
                                minLength: 6
                            })}
                            className="input" placeholder="Password" />
                        {
                            errors.password?.type === 'required' && <p className='text-red-500 font-bold'>Password is required</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500 font-bold'>Password Must be 6 characters or longer</p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn btn-primary text-black mt-4">Login</button>
                    </fieldset>
                    <p><small>New to this website? <Link className="font-bold text-primary underline hover:text-black" to="/register">Register</Link></small></p>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
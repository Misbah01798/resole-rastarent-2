

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bg from '../assets/image/ricefoo.jpg'
import Navber from "../Pages/Navber";
import useAuth from "../hooks/useAuth";
import { useState } from "react";




const Login = () => {
    const { login, signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [succcesLogin, setSuccesLogin] = useState('');

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');




        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/;
        if (!passwordRegex.test(password)) {
            setLoginError('Password must contain at least 6 characters and may include letters, numbers, and special characters.');
            return;
        }

        setLoginError('')
        setSuccesLogin('')
        login(email, password)
            .then(result => {
                console.log(result.user);
                setSuccesLogin('User Login Suucesfully')
                navigate(location?.state ? location.state : '/');
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully Login.',
                });
                const user = { email, password };
                fetch('', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Error',
                    text: error.message,
                });
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })

    }






    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
        }}>

            <div className="hero bg-blue-200 bg-opacity-10"  >
                <div className="">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-white">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-50">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>

                        </form>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary">Google</button>
                        </div>
                        {/* {
                            loginError && <p>{loginError}</p>
                        }
                        {
                            succcesLogin && <p>{succcesLogin}</p>
                        } */}
                        <p className="text-center text-xl">Don't Have an Account <Link to='/register' className="text-red-400 font-bold">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

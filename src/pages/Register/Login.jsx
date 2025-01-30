import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerlottiedata from '../../assets/lottie/register.json'
import Lottie from 'lottie-react';
import AUthContext from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';


const Login = () => {

  const {logInUser,signInWithGoogle} = useContext(AUthContext);
  
  const navigate  = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();

    const form = location.state || '/';


    const handleGoogleLogin =() => {
          signInWithGoogle()
          .then(result => {
            navigate(form)
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Google Sign in successfully"
            });
            
          })
          .catch(error => {
            console.log(error.message)
          })
        }


    const handleLogIn = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password)


      logInUser(email,password)
      .then(result => {
        console.log(result.user)
        // ----------------create token
        // const user = {email: result.user.email}

        // axios.post('https://job-portal-server-phi-five.vercel.app/jwt', user, {withCredentials:true})
        // .then(res =>{
        //   console.log(res.data)
        // })
        // navigate(form)
        const Toast = Swal.mixin({
          toast: true,
          position: "top-center",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
      })
      .catch(error => {
        console.log(error.message)
      })
      
  }
    return (
        <div className='flex flex-col justify-center items-center md:flex-row gap-8'>
            <div className="card bg-base-100 w-full mx-auto  mt-28 max-w-sm shrink-0 shadow-2xl shadow-blue-400 mb-24">
        {/* <Helmet>
          <title>Asthetic Gamer || Login</title>
        </Helmet> */}
        <form onSubmit={handleLogIn}  className="card-body">
          <h1 className="text-5xl font-bold text-center mb-10">Login now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
            //   ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute right-10 top-[270px]"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            <label  className="label">
              <a className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        {/* {success && (
          <p className="text-green-500 text-xl text-center">
            User Login Successfully!{" "}
          </p>
        )}
        {loginError && <p className="text-xl text-red-500">{loginError}</p>} */}
          <div className="divider w-[90%] mx-auto">OR</div>
  
  
        <div className="text-center my-4">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline bg-yellow-300 text-gray-700"
          >
            <FcGoogle className="text-xl hover:text-white" />
            Login With Google
          </button>
        </div>
  
        <p className="mb-5 mx-auto">
          New to this website please
          <Link className="text-blue-700 ml-2" to="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
      <div className='w-[500px] flex justify-center items-center mr-40'>
        <Lottie animationData={registerlottiedata}></Lottie>
      </div>
        </div>
    );
};

export default Login;
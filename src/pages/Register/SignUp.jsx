import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import registeranimatedata from '../../assets/lottie/register.json'
import AUthContext from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const SignUp = () => {
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {createUser,signInWithGoogle}= useContext(AUthContext);

    const handleGoogleLogin =() => {
      signInWithGoogle()
      .then(result => {
        navigate('/')
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

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)


        createUser(email,password)
        .then(result =>{
          console.log(result.user)
          const Toast = Swal.mixin({
            toast: true,
            position: "center",
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
            title: "Sign UP successfully"
          });
        })
        .catch(error => {
          console.log(error.message)
        })
    }
    return (
        <div className='flex flex-col justify-between mx-24 items-center md:flex-row gap-8'>
            <div>
        {/* <Helmet>
          <title>Asthetic Gamer || Signin</title>
        </Helmet> */}
        <div className="card bg-base-100 w-full max-w-lg mx-auto mt-20 shrink-0 shadow-2xl shadow-blue-400 mb-24">
          <form
          onSubmit={handleSignUp}
            className="card-body w-full mx-auto my-6"
          >
            <h1 className="text-5xl font-bold mb-10">Sign Up now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
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
              <div
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute right-4 top-[54px]"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </div>
             
            </div>
            <div className="form-control">
              <label className="label justify-start gap-2 cursor-pointer">
                <input type="checkbox" name="terms" className="checkbox" />
                <span className="label-text">
                  Accept all the Terms & Condition.
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
          {/* {errorMessage && (
            <p className="text-xl text-red-500 ">{errorMessage}</p>
          )}
          {success && (
            <p className="text-xl text-center mb-3 text-green-500">
              Sign Up is Successfull.
            </p>
          )} */}
          <div className="divider w-[90%] mx-auto">OR</div>
  
          <div className="text-center my-4">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline bg-yellow-300"
            >
              <FcGoogle  className="text-xl hover:text-white" />
              Sign Up With Google
            </button>
          </div>
  
          <p className="mb-10 mx-auto ">
            Already have an account Please{" "}
            <Link className="text-blue-700 ml-2" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className='w-[500px] flex justify-center items-center '>
        <Lottie animationData={registeranimatedata}></Lottie>
      </div>
        </div>
    );
};

export default SignUp;
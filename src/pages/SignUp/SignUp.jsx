import { Link } from 'react-router-dom';
import signImg from '../../assets/images/sign/sign.png';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-bg'>
            <div className='w-10/12 lg:w-9/12 mx-auto py-32'>
                <div className="hero min-h-screen form-bg pt-14 pb-24" style={{boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)'}}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        {/* image */}
                        <div className="text-center">
                            <img src={signImg} alt="sign up image" className='lg:w-[600px] w-full' />
                        </div>
                        {/* form */}
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            {/* title */}
                            <h4 className='text-center text-[#151515] font-bold text-[40px] md:mb-6'>Sign Up</h4>
                            <form className="lg:card-body">
                                {/* name */}
                                <div className="form-control">
                                    <label className="label ps-0">
                                        <span className="text-[#444444] text-xl font-semibold">Name</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered rounded" required />
                                </div>
                                {/* email */}
                                <div className="form-control">
                                    <label className="label ps-0">
                                        <span className="text-[#444444] text-xl font-semibold">Email</span>
                                    </label>
                                    <input type="email" placeholder="Type here" className="input input-bordered rounded" required />
                                </div>
                                {/* password */}
                                <div className="form-control">
                                    <label className="label ps-0">
                                        <span className="text-[#444444] text-xl font-semibold">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter your password" className="input input-bordered rounded" required />
                                </div>
                                {/* button */}
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#D1A054] border-0 capitalize text-white text-xl font-bold">Sign Up</button>
                                </div>
                            </form>
                            {/* login page button */}
                            <p className='text-center text-[#D1A054] text-xl font-medium mt-8 lg:mt-0'>Already registered? <Link className='font-bold'>Go to log in</Link></p>
                            <p className='text-center text-[444444] text-xl font-medium mt-6 mb-8'>Or sign up with</p>
                            <div className='flex gap-11 justify-center'>
                                {/* facebook */}
                                <button className="btn btn-circle btn-outline text-[#444444] text-2xl">
                                    <FaFacebookF />
                                </button>
                                {/* google */}
                                <button className="btn btn-circle btn-outline text-[#444444] text-2xl">
                                    <FaGoogle />
                                </button>
                                {/* github */}
                                <button className="btn btn-circle btn-outline text-[#444444] text-2xl">
                                    <FaGithub />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
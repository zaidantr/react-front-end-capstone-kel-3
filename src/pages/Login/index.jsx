import React, { useState } from 'react'
import logogym from '../../assets/logogym.svg'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Login = () => {
    const [inputs, setInputs] = useState([
        {
            label: "Username",
            name: "username",
            type: "text",
            value: "",
            placeholder: "Enter your Username",
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            value: "",
            placeholder: "Enter your Password",
        }
    ])
console.log(inputs)
    return (
        <div className='h-screen bg-login-bg bg-cover bg-no-repeat'>
            <div className='container mx-auto h-full flex flex-1 justify-center items-center'>
                <div className='w-full max-w-lg '>
                    <div className=' leading-loose'>
                        <form className='max-w-sm m-4 p-10 backdrop-blur-md bg-white/40 rounded shadow-xl'>

                            <div className='flex justify-center items-center'>
                                <img className=' w-16 h-16 fill-baseorange' src={logogym} alt="" />
                                <p className='ml-3 font-bold text-4xl text-baseorange'>A-A Gym</p>
                            </div>
                            <p className='text-white text-center mb-4 text-base'>Please Enter Username and your Password</p>
                            <div>
                                <label className='block text-sm mb-1 text-white'>Username</label>
                                <div className='flex'>
                                    <i className='absolute pointer-events-none pl-1'><AccountCircleIcon /></i>
                                    <input className='w-full pl-8 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                                        placeholder={inputs[0].placeholder}
                                        type={inputs[0].type}
                                        value={inputs[0].value}
                                        onChange={(e) => setInputs([...inputs], inputs[0].value = e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='mt-2'>
                                <label className='block text-base mb-1 text-white'>Password</label>
                                <div className='flex'>
                                    <i className='absolute pointer-events-none pl-1'><LockOpenIcon /></i>
                                    <input className='w-full pl-8 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                                        placeholder={inputs[1].placeholder}
                                        type={inputs[1].type}
                                        value={inputs[1].value}
                                        onChange={(e) => setInputs([...inputs], inputs[1].value = e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='mt-4 items-center justify-center'>
                                <button className='w-full py-3 rounded bg-baseorange hover:bg-gradient-to-r from-linearblue to-linearorange align-baseline font-bold text-xl text-white'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
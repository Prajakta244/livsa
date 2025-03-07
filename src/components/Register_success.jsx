import React from 'react'
import success_gif from '../assets/success.gif'
import { Button } from '@mui/material'
const Register_success = ({data}) => {
    const {name,email_id} = data
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col items-center'>
                <img
                    src={success_gif}
                    alt="success"
                    class="h-[140px] w-[210px]"
                />
                <h2 className='header mb-6 max-w-[600px] text-center'>
                    <span className='font-bold'>Dr. {name} </span>, your profile has been successfully <br /><span className='text-primary'>registered on Livsa</span>.
                </h2>
                <p className='text-[12px] mb-8'>Use your registered email ({email_id}) to sign in to your dashboard.</p>
                <Button
                    variant="contained"
                    onClick={() => window.location.href = "/login"}
                    sx={{ backgroundColor: "#2EC4B6", "&:hover": { backgroundColor: "#28A399" } }}
                >
                    🔑 Log in to Dashboard
                </Button>

            </div>
        </div>
    )
}

export default Register_success
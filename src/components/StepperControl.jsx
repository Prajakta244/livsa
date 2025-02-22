import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
    return (
        <div className='container flex justify-around mt-4 mb-8'>
            <button className={`flex items-center rounded-md bg-gray-400 py-2 px-8 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-primaryGrad ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} type="button" onClick={() => handleClick('back', currentStep)}>
                Back
            </button>
            <button className="flex items-center rounded-md bg-gray-400 py-2 px-8 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-primaryGrad" type="button" onClick={() => handleClick('next', currentStep)}>
                {currentStep === steps.length ? 'Confirm' : 'Next'}
            </button>
        </div>
    )
}

export default StepperControl
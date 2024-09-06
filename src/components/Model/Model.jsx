import React from 'react'

const Model = ({ close, children }) => {

    return (
        <>
            <div onClick={close} className='fixed top-0 left-0 w-full h-screen bg-[#0005]'></div>
            <div className='animate fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                {children}
            </div>
        </>
    )
}

export default Model
import React from 'react'

const Loader = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center py-3">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-700" />
        </div>
    )
}

export default Loader

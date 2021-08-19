import React from 'react';

const Loading = () => {
    return (
        <div className='container'>
            <div className='col-6 m-auto' style={{ padding: '60px' }}>
                <span className="fa fa-spinner fa-4x text-primary fa-pulse fa-fw"></span>
            </div>
        </div>
    )
}

export default Loading;
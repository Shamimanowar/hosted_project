import React from 'react';

const Loading = () => {
    return (
        <div className='container'>
            <div className='col-12 ' style={{ padding: '60px' }}>
                <span className="fa fa-spinner fa-4x text-primary fa-pulse fa-fw"></span>
            </div>
        </div>
    )
}

export default Loading;
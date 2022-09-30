import React from 'react'

export default function Profiles({Data}) {
    return (
        <>
            <div id='profile'>
                {Item(Data)}
            </div>
        </>
    )
}

function Item(data) {
    return (
        <>
            {
                data.map((value, index) => (
                    <div className='flex' key={index}>
                        <div className='item'>
                            <div className='info'>
                                <h3 className='name'>{value.username}</h3>
                            </div>
                        </div>
                        <div className='item'>
                            <span className='display-6'>{value.score}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

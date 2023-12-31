import React from 'react'

const style = {
    background: '#9098b4',
    border: '2px solid #3a4260',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({ onClick, value }) => {
    return (
        <>
            <button style={style} onClick={onClick}>
                {value}
            </button>
        </>
    )
}
export default Square

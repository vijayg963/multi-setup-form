import React from 'react'

function Fourth(props) {

    const alertMsg = (name) => {
        alert(`Hello ${name} you have create your own WorkSpace`)
    }

    return (
        <div>
            <span className='circle' >✔</span>
            <h2>Congratulations, {props.displayName}</h2>
            <p>You have completed onboarding, you can start using the Eden!</p>
            <input onClick={() => alertMsg(props.displayName)} type="submit" value={'Launch Eden'} />
        </div>
    )
}


export default Fourth
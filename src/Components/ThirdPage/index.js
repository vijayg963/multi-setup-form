import React from 'react';

const Third = (props) => {
    const { typeOfUser, setTypeOfUser } = props;

    const handleClick = (type) => {
        setTypeOfUser(type)
    }

    const handleSubmit = () => {
        props.setstep('4')
    }

    return (
        <div>
            <h2>How are you planning to use Eden?</h2>
            <p>We'll steamline your setup experience accordingly.</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex">
                    <div onClick={() => handleClick('Self')} className={typeOfUser === 'Self' ? 'active col' : 'col'}>
                        <span>🤵</span>
                        <h3>For myself</h3>
                        <p className='para'>write better. Think more clearly. Stay organized</p>
                    </div>
                    <div onClick={() => handleClick('Team')} className={typeOfUser === 'Team' ? 'active col' : 'col'} >
                        <span>👬</span>
                        <h3>With my team</h3>
                        <p className='para'>Wikis, docs, task & projects, all in one place</p>
                    </div>
                </div>
                <input onClick={handleSubmit} type="submit" value={'Create Workspace'} />
            </form >
        </div >
    );
}

export default Third;

import React from 'react';

const First = (props) => {
    const { fullname, setfullname } = props;
    const { displayName, setdisplayName } = props;

    const handleSubmit = () => {
        props.setstep('2')
    }

    return (
        <div>
            <h2>Welcome! First things first...</h2>
            <p>You Can always change then later</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="fullname">Full Name
                    </label>
                    <input onChange={(e) => setfullname(e.target.value)} value={fullname} type="text" name="fullname" id="fullname" placeholder='Steve Jobs' />
                </div>
                <div>
                    <label htmlFor="displayname">Display Name
                    </label>
                    <input onChange={(e) => setdisplayName(e.target.value)} value={displayName} type="text" name="displayname" id="displayname" placeholder='Steve' />
                </div>
                <input onClick={handleSubmit} type="submit" value={'Create Workspace'} />
            </form>
        </div>
    );
}

export default First;

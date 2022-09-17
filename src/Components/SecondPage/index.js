import React from 'react';




const Second = (props) => {
    const { workSpace, setworkSpace } = props;
    const { workSpaceURL, setworkSpaceURL } = props;

    const handleSubmit = () => {
        props.setstep('3')
    }

    return (
        <div>
            <h2>Let's set up a home for all your work</h2>
            <p>You can always create another workspace later.</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="workspace-name">Workspace Name
                    </label>
                    <input onChange={(e) => setworkSpace(e.target.value)} value={workSpace} type="text" name="workspace-name" id="workspace-name" placeholder='Eden' />
                </div>
                <div>
                    <label htmlFor="workspace-url">Workspace URL (optional)
                    </label>
                    <input onChange={(e) => setworkSpaceURL(e.target.value)} value={workSpaceURL} type="text" name="workspace-url" id="workspace-url" placeholder='www.eden.com/   Example' />
                </div>
                <input onClick={handleSubmit} type="submit" value={'Create Workspace'} />
            </form>
        </div>
    );
}

export default Second;

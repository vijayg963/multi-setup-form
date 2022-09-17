import React, { useState } from 'react'
import First from "./FirstPage";
import Fourth from "./FourthPage";
import ProgressBar from "./ProgressBar";
import Second from "./SecondPage";
import Third from "./ThirdPage";
const formConfig = {
  '1': First,
  '2': Second,
  '3': Third,
  '4': Fourth,
}



function App() {
  const [fullname, setfullname] = useState('');
  const [displayName, setdisplayName] = useState('');
  const [workSpace, setworkSpace] = useState('');
  const [workSpaceURL, setworkSpaceURL] = useState('');
  const [typeOfUser, setTypeOfUser] = useState('Self');
  const [step, setstep] = useState('1');

  let CurrentForm = formConfig[step]

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-center"><img width={55} height={55} src="logo.jpeg" alt="" />   <h1>
          Eden
        </h1></div>

        <ProgressBar step={step} />
        <CurrentForm
          fullname={fullname} setfullname={setfullname}
          displayName={displayName} setdisplayName={setdisplayName}
          workSpace={workSpace} setworkSpace={setworkSpace}
          workSpaceURL={workSpaceURL} setworkSpaceURL={setworkSpaceURL}
          typeOfUser={typeOfUser} setTypeOfUser={setTypeOfUser}
          step={step} setstep={setstep} />
      </header>
    </div>
  );
}

export default App;

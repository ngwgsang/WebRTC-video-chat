import React, { useState, useContext } from 'react';
import { SocketContext } from '../SocketContext';

export default function Option({children}) {
const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
const [idToCall, setIdToCall] = useState('');
const [nameToCall, setNameToCall] = useState('');


  return (
    <div className='option'>
        <span className='idBox'><b>ID: </b>{me}</span>
        <span className='nameBox'><b>Tên: </b> {name}</span>
        {children}
        <input value={name} type="text" placeholder='Tên' onChange={(e) => {
           setName(e.target.value)
        }}/>
        <div className="callingBox">
          <input value={idToCall} type="text" placeholder='ID' onChange={(e) => {
            setIdToCall(e.target.value)
          }}/>
          {callAccepted == false ? (<button className = "callingBtn" onClick={() => callUser(idToCall) }>Gọi</button>) : (<button className = "hangupBtn" onClick={leaveCall }>Dừng</button>)}
        </div>
    </div>
  )
}

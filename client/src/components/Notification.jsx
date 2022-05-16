import React, { useState, useContext } from 'react';
import { SocketContext } from '../SocketContext';

export default function Notification() {
const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div className='noti'>
        {call.isReceivingCall && !callAccepted && (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h1>{call.name} đang gọi cho bạn !</h1>
            <button onClick={answerCall}>
                Trả lời
            </button>
            </div>
        )}
    </div>
  )
}

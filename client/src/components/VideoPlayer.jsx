import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'

export default function VideoPlayer() {
const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)

  return (
    <div className='videoPlayer'>
        <video playsInline muted ref={myVideo} autoPlay className='video myVideo' />
        {callAccepted && !callEnded && (
        <video playsInline muted ref={userVideo} autoPlay className= 'video userVideo' />
        )}
    </div>
  )
}

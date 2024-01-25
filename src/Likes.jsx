import React from 'react'

export default function Likes(props) {
  return (
    <div>
      <div className='flex'>
        <img src={props.monImageAafficher} alt="" />
        <p className='text white'>{props.monText}</p>
        

      </div>
    </div>
  )
}

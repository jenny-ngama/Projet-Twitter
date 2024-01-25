import React from 'react'

export default function ImageTweet({props}) {
  return (
    <div>
      <img src={props.src} alt="photo" />
    </div>
  )
}

import React from 'react'

export default function Button({ titre, classes }) {
  return <button className={`bg-sky-400 rounded-full px-4 py-2 flex ml-20 ${classes}`}>{titre}</button>

}

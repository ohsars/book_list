import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  let d = new Date().getFullYear()

  return (
    <div className='flex justify-center text-center bg-black text-white bottom-0 '> 
      <h2 className='p-3'>Lists api Library by  @  <Link target='_blank' to={"http://engrmarvelus.netlify.app"}>Osas</Link> {d}</h2>
    </div>
  )
}

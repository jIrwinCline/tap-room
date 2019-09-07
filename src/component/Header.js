import React, { Component } from 'react'
import HeaderNavbar from './HeaderNavbar.js'
import headerPic from '../public/headerPic.jpg'



export default function Header() {
  return (
    <div>
      <img src={headerPic} alt='Header Picture'/>
      <HeaderNavbar/>
    </div>
  );
}

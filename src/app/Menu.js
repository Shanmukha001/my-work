"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export const Menu = () => {
  const pathName=usePathname();
  const [menuItemName,setMenuItemName]=useState(pathName== '/' ? 'home' : pathName.substring(1))
  const fnMenuClick=(eve)=>{
    eve.stopPropagation();
    const id=eve.target.id;
    if(id){
      setMenuItemName(id)
    }
  }
  return (
    
    <ul className='menu' onClick={fnMenuClick}>
    <li> <Link class={menuItemName==='add' && 'menu-active'} id="add" href="/add">Add</Link></li>
    <li> <Link class={menuItemName==='checkprime' && 'menu-active'} id="checkprime" href="/checkprime">CheckPrime</Link></li>
    <li> <Link class={menuItemName==='reverse' && 'menu-active'}  id="reverse" href="/reverse">Reverse</Link></li>
  </ul>
    
  )
}

"use client";
import React, { useState } from 'react'
import './Items.css'
import Item from './Item/Item'
const Items = () => {
   const [items , setItems] = useState([{
    Id:101,
    Count:254,
    Name:'Haldi-Chandan Facepack',
    Domain: 'Facecare',
    Type: 'Facewash'
   },
  {
    Id:102,
    Count:254,
    Name:'Haldi-Chandan Facepack',
    Domain: 'Personal Wellness',
    Type: 'Talcum powder'
  },
  {
    Id:103,
    Count:254,
    Name:'Haldi-Chandan Facepack',
    Domain: 'Personal Wellness',
    Type: 'Talcum powder'
  },
  {
    Id:104,
    Count:254,
    Name:'Haldi-Chandan Facepack',
    Domain: 'Personal Wellness',
    Type: 'Talcum powder'
  },
  {
    Id:105,
    Count:254,
    Name:'Haldi-Chandan Facepack',
    Domain: 'Personal Wellness',
    Type: 'Talcum powder'
  },
  {
    Id:106,
    Count:254,
    Name:'Haldi-Chandan Facepack',
    Domain: 'Personal Wellness',
    Type: 'Talcum powder'
  },
  {
    Id:107,
    Count:254,
    Name:'Haldi-Chandan Facepack',
    Domain: 'Personal Wellness',
    Type: 'Talcum powder'
  }])
  return (
    <div className='items'>
      {items && items.map((item)=>(
        <Item item={item}/>
      ))}
        
    </div>
  )
}

export default Items
import React from 'react'
import { useEffect } from 'react'

const Navbar = ({countvariable}) => {

    useEffect(() => {
        alert("this alert will render every time")
    })
    useEffect(() => {
        alert("this alert will render on first time")
    },[])
    useEffect(() => {
        alert("this alert will render when the count will change")
    },[countvariable])
 
 
    return (
    <div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => navigate('/')}>go home</button>
    </div>
  )
}

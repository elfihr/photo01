import React from 'react'
import HomeImg from "../assets/homeimg.jpg"
import Button from '@mui/material/Button';
const Home = () => {
  return (
    <section style={{ backgroundImage: `url(${HomeImg})` }}
      className='min-h-[70vh] bg-main bg-cover bg-center flex justify-center items-center'>
      <Button  variant='contained' ><p className='text-4xl p-2'>Galeria</p></Button>
    </section>
  )
}

export default Home
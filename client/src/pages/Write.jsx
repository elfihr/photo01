import React,{useState} from 'react'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'

const Write = () => {

  const [posts,setPosts] = useState({
    title:"",
    desc:"",
    img:""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setPosts(prev => ({...prev,[e.target.name]: e.target.value}))
  }
 
const handleClick = async e => {
  e.preventDefault()
  try{
    await axios.post("http://localhost:4300/gallery",posts)
    navigate("/gallery")

  }catch(err){
    console.log(err)
  }

}
  return (
    <section className='min-h-[80vh] flex flex-col items-center justify-center gap-4'>
      <h3 className='text-4xl mb-4'>Write Page</h3>

      <input  className="bord w-80" placeholder='title' name='title' type='text' onChange={handleChange} />
      <textarea className="bord w-80" rows={6} name='desc' placeholder='Description*'onChange={handleChange} />
      <input className="bord w-72" name='img' placeholder='url image*' type='text'onChange={handleChange} />

      <button className='btn' onClick={handleClick}>Post</button>
    </section>
  )
}

export default Write
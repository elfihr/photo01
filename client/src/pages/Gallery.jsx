import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Gallery = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("http://localhost:4300/gallery")
        setPhotos(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAll()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:4300/gallery/" + id)
    window.location.reload()
    
  }

  return (
    <section className='min-h-[80vh] w-full flex flex-col items-center justify-center py-12'>
      <h2 className='text-4xl font-bold mb-4'>Galeria</h2>
      <div className='flex flex-wrap gap-4 justify-center'>
        {photos.map(photo => {
          return (
            <div key={photo.id} className='w-72 flex flex-col'>
              <img className='w-72 h-60 object-cover shadow-2xl' src={photo.img} alt={photo.title} />
              <div className='flex justify-between items-center mt-2'>
                <h4 className='font-semibold text-2xl'>{photo.title}</h4>

                <div className='flex gap-2'>
                  <button className='btn py-1 px-2'>
                  <Link to={`/update/${photo.id}`}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  
                  </button>
                  <button className='btn py-1 px-2'  onClick={() => handleDelete(photo.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>

              </div>
              <p>{photo.desc.substring(0,50)+"..."}</p>

            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery
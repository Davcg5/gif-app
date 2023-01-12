import React from 'react'

export default function GifCard({id, title, url}) {


    return (
    <div className='card'>
        <img src={url} alt={title} />
    </div>
  )
}

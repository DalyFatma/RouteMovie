import React from 'react'
import { movies } from '../data/data'

export default function Movie({movies}) {
  return (
    <div>
        {movies.map(el=><Movie el={el} key={el.id}/>)}
    </div>
  )
}

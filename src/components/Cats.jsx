import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import '../styles/CatsStyle.css'

function Cats () {
  const [cats, setCats] = useState()

  useEffect(() => {
    const loadDate = async () => {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p')
      if (response.status === 200) {
        const data = response.data
        setCats(data)
      }
    }
    loadDate()
  }, [])

  

  return (
    <>
      <h1>DISCOVERY CAT</h1>
      <div className='list'>
        {
        cats && cats.map(cat => {
          return (
            <Card key={cat.id} cat={cat} />
          )
        })
      }
      </div>
    </>
  )
}

export default Cats

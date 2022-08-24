import type { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react';
import { TOKEN_URL, API_TOKEN } from '../config';


const Home: NextPage = () => {
  const [searchInput, setSearchInput] = useState('')
  const [accesToken, setAccesToken] = useState('');
  const [albums, setAlbums] = useState([])
  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value)
  }
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault();
  };
  useEffect(() => {
    // API Access Token
    let authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `${API_TOKEN}`
    }
    fetch(`${TOKEN_URL}`, authParameters)
    .then(result => result.json())
    .then(data => setAccesToken(data.access_token))
  }, [])

  // Search
  async function search()  {

    // Get request using search to get the Artist  ID
    let searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesToken}`  
      }
    }
    let artistID = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, searchParameters)
      .then(response => response.json())
      .then(data => { return data.artists.items[0].id })

      // Get request with Artist ID grab all the albums from that artist
      let returnAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limi=50`, searchParameters)
        .then(response => response.json())
        .then(data => {
          setAlbums(data.items)
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  onChange={handleChange} />
        <button onClick={search}>search</button>
      </form>
    </div>
  )
}

export default Home

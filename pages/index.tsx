import type { NextPage } from 'next'
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Grid from '../components/Grid/Grid';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import { TOKEN_URL, API_TOKEN } from '../config';


const Home: NextPage = () => {

  const [query, setQuery] = useState([]);

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


  return (
    <>
      <Header />
        <Grid
          className='p-4 max-w-7xl m-auto'
          title='Albums'
        >
          {query 
          ?  query.map((album) => (
            <Link key={album.id} href={`/${album.id}`}>
              <div>
                <Card
                  imgUrl={album.images[0].url}
                  title={album.name}
                />
              </div>
            </Link>
          )): <SearchInput accesToken={accesToken} setQuery={setQuery} />}
        </Grid>
      
    </>
  )
}

export default Home

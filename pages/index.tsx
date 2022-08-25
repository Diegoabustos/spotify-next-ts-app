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
  const [accesToken, setAccesToken] = useState('');


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
    <main className='h-screen w-screen bg-gray-900 overflow-y-scroll'>
      <Header />
      <div className='flex items-center justify-center mt-9 pt-10'>
        <SearchInput accesToken={accesToken} setQuery={setQuery} />   

      </div>
        <Grid
          className='p-4 max-w-7xl m-auto'
          title='Albums'
        >
          {query.length > 0
          ?  query.map((album) => (
            <Link key={album.id} href={`/${album.id}`}>
              <div>
                <Card
                  imgUrl={album.images[0].url}
                  title={album.name}
                />
              </div>
            </Link>
          )): null}
        </Grid>
    </main>
  )
}

export default Home

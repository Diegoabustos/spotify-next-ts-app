import type { NextPage } from "next";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { Token } from "../api/types";
import Card from "../components/Card/Card";
import Grid from "../components/Grid/Grid";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import { TOKEN_URL, API_TOKEN } from "../config";
import { useFetchToken } from "../hooks/useFetchToken";

const Home: NextPage = () => {

  const [accesToken, setAccesToken] = useState("");
  const [text, setText] = useState("");
  const [albums, setAlbums] = useState([]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setText(value);
  };

  useEffect(() => {
    // API Access Token
    let authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `${API_TOKEN}`,
    };
    fetch(`${TOKEN_URL}`, authParameters)
      .then((result) => result.json())
      .then((data) => setAccesToken(data.access_token));
  }, []);

  // Search
  async function search() {
    // Get request using search to get the Artist  ID
    let searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesToken}`,
      },
    };
    let artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${text}&type=artist`,
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    // Get request with Artist ID grab all the albums from that artist
    let returnAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limi=50`,
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.items);
      });
  }

  return (
    <main className="relative h-screen w-screen bg-gray-900 overflow-y-scroll">
      <Header />
      <div className="flex items-center justify-center mt-9 pt-10">
        <form onSubmit={handleSubmit}>
          <div className="flex w-96 rounded-xl bg-white">
            <input
              className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none"
              id="search"
              name="search"
              onChange={handleInput}
              placeholder="Search Artist"
              value={text}
              type="search"
            />
            <button
              className="m-2 rounded bg-green-600 px-4 py-2 text-white"
              onClick={search}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <Grid className="p-4 max-w-7xl m-auto" title="Albums">
        {albums.map((album) => (
          <Link key={album.id} href={`/${album.id}`}>
            <div className="cursor-pointer hover:opacity-80 duration-300">
              <Card imgUrl={album.images[0].url} title={album.name} />
            </div>
          </Link>
        ))}
      </Grid>
    </main>
  );
};

export default Home;

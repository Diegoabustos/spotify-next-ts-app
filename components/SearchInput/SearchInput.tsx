import { useState, useRef } from "react";

type SearchInputProps = {
  setQuery: React.Dispatch<React.SetStateAction<any[]>>;
  accesToken: string;
};

const TIME = 300; //MS


const SearchInput = ({ setQuery, accesToken }: SearchInputProps) => {
  const [text, setText] = useState("");
  const [albums, setAlbums] = useState([])
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    setQuery(albums)
  };


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setText(value)
  }
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
    let artistID = await fetch(`https://api.spotify.com/v1/search?q=${text}&type=artist`, searchParameters)
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
    <main className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit}>
        <div className="flex w-96 rounded bg-white">
          <input
            className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none"
            id="search"
            name="search"
            onChange={handleInput}
            placeholder="Search Artist"
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
    </main>
  );
};

export default SearchInput;

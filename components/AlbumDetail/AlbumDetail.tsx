import Image from "next/image";
// Types




type AlbumDetailProps = {
    albumTracks: any
}

const AlbumDetail = ({ albumTracks }: AlbumDetailProps) => {
    const albumImage = albumTracks.images
    const tracksAlbum = albumTracks.tracks.items
    return (
    <div className='bg-black'>
        <div className="flex">
            <div className='mx-6 my-6'>
                <Image width="200" height="200" alt="album" src={albumImage[0].url} />
            </div>
            <div className='flex flex-col justify-center'>
                <h4 className='text-gray-500 tracking-widest text-sm'>Abum Detail</h4>
                <h1 className='text-white text-4xl mb-2'>{albumTracks.name}</h1>
                <p className='text-gray-600 text-sm mb-2'>{albumTracks.label}</p>  
                <p className='text-gray-600 text-sm mb-2' >Created by {albumTracks.release_date} {albumTracks.total_tracks}</p>  
            </div>
        </div>
        <div className="flex text-gray-600">
            <div className='w-full p-2 ml-6'>Title</div>
            <div className='w-full p-2 '>Artist</div>
            <div className='w-full p-2 '>Release Date</div>
        </div>
        {
            tracksAlbum.map(tracks => (
                <div key={tracks.id} className="flex text-white border border-b border-gray-800 hover:bg-gray-800">
                    <div className='w-full p-2 ml-6'>{tracks.name}</div>
                    <div className='w-full p-2 '>{tracks.artists[0].name}</div>
                    <div className='w-full p-2 '>{tracks.release_date}</div>
                </div>

            ))
        }
    </div>
  )
}

export default AlbumDetail;



import Image from "next/image";
import { calcTime } from "../../helpers";





type AlbumDetailProps = {
    name: string;
    label: string
    albumTracks: any;
    releaseDate: string;
    totalTracks: number;
    albumImageUrl: any;
}

const AlbumDetail = ({ albumTracks, albumImageUrl, name, label, releaseDate, totalTracks }: AlbumDetailProps) => {
    console.log(albumTracks)
    return (
    <div className='bg-black'>
        <div className="flex">
            <div className='mx-6 my-6'>
                <Image width="200" height="200" alt="album" src={albumImageUrl} />
            </div>
            <div className='flex flex-col justify-center'>
                <h4 className='text-gray-500 tracking-widest text-sm'>Abum Detail</h4>
                <h1 className='text-white text-4xl mb-2'>{name}</h1>
                <p className='text-gray-600 text-sm mb-2'>{label}</p>  
                <p className='text-gray-600 text-sm mb-2' >Created by {releaseDate} / Songs:{totalTracks}</p>  
            </div>
        </div>
        <div className="flex text-gray-600">
            <div className='w-full p-2 ml-6'>Title</div>
            <div className='w-full p-2 '>Artist</div>
            <div className='w-full p-2 '>Duration</div>
        </div>
        {
            albumTracks.map(tracks => (
                <div key={tracks.id} className="flex text-white border border-b border-gray-800 hover:bg-gray-800">
                    <div className='w-full p-2 ml-6'>{tracks.name}</div>
                    <div className='w-full p-2 '>{tracks.artists[0].name}</div>
                    <div className='w-full p-2 '>{calcTime(tracks.duration_ms)}</div>
                </div>

            ))
        }
    </div>
  )
}

export default AlbumDetail;



import Image from "next/image";

type CardProps = {
  imgUrl?: string;
  title: string;
  subtitle?: string;
};

const Card = ({ imgUrl, title, subtitle }: CardProps) => {
  return (
    <div className="bg-slate-800 flex flex-col items-center w-48 rounded p-4 relative cursor-pointer">
      <div className="object-cover rounded">
        <Image width="82" height="82" src={imgUrl} alt="album-image" />
      </div>
      <div className="mt-4 leading-none">
        <h2 className="text-xl text-white">{title}</h2>
        <p className="text-sm mt-2 font-medium text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;

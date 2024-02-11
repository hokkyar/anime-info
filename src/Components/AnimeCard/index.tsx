import Image from "next/image"
import Link from "next/link"
import { Anime } from "@/Types/AnimeType"

// mal_id, url, images, trailer, approved, titles, title, title_english, title_japanese, title_synonyms, type, source, episodes, status, airing, aired, duration, rating, score, scored_by, rank, popularity, members, favorites, synopsis, background, season, year, broadcast, producers, licensors, studios, genres, explicit_genres, themes, demographics

//  {/* <a href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${data.mal_id}/full`}>LINK</a> */}

export default function AnimeCard({ data, i }: { data: Anime, i: number }): JSX.Element {
  return (
    <div className='relative my-3 mx-5 flex gap-2 shadow-md' key={data.mal_id}>
      <Link href={`/detail/${data.mal_id}`}>
        <div className="w-[115px] h-[130px] hover:scale-[103%] transition duration-200">
          <span className="absolute top-0 left-0 bg-indigo-600 p-1 text-white bg-opacity-70">{i + 1}</span>
          <Image priority={true} className="object-cover w-full h-full" src={data.images.jpg.image_url} alt={data.title} width={100} height={100} />
        </div>
      </Link>
      <div className='overflow-hidden w-full px-1'>
        <Link href={`/detail/${data.mal_id}`}>
          <p className="truncate font-semibold transition duration-200 hover:text-indigo-600">
            {data.title}
          </p>
        </Link>
        <p>{data.type} ({data.episodes} eps)</p>
        <p>{data.score} ({data.members})</p>
        <p className="truncate">{data.genres.map(g => g.name).join(', ')}</p>
        <p>{data.status}</p>
      </div>
    </div>
  )
}
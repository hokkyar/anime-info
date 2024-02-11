'use client'
import React, { useState, useEffect } from 'react';
import AnimeCard from "@/Components/AnimeCard";
import { Anime } from "@/Types/AnimeType";
import Skeleton from '@/Components/Skeleton';
import InfiniteScroll from 'react-infinite-scroll-component';

async function getAnimes(page: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}&limit=24`)
  return res.json()
}

export default function Home(): React.ReactNode {
  const [pageNumber, setPageNumber] = useState(1)
  const [animes, setAnimes] = useState<{ data: Anime[] } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const animeData = await getAnimes(1)
        setAnimes(animeData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
    return () => { }
  }, [])

  const fetchMoreData = async () => {
    try {
      const nextPage = pageNumber + 1
      const animeData = await getAnimes(nextPage)
      setAnimes((prevAnimes) => {
        if (prevAnimes) {
          return {
            ...prevAnimes,
            data: [...prevAnimes.data, ...animeData.data]
          }
        } else {
          console.error('Previous animes data is null')
          return prevAnimes
        }
      })
      setPageNumber(nextPage)
    } catch (error) {
      console.error('Error fetching more data:', error)
    }
  }

  return (
    <>
      {
        isLoading ? <Skeleton num={12} /> : (
          <InfiniteScroll
            dataLength={(animes?.data.length == undefined) ? 0 : animes.data.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<Skeleton num={9} />}
          >
            <div className="md:grid md:grid-cols-3 my-3">
              {animes?.data.map((d: Anime, i: number) => (
                <AnimeCard key={i} data={d} i={i} />
              ))}
            </div >
          </InfiniteScroll>
        )
      }
    </>
  )
}
export default function Skeleton({ num }: { num: number }) {
  return (
    <div className='md:grid md:grid-cols-3 my-3'>
      {
        Array(num).fill(0).map((el, i) => (
          <div className='my-3 mx-5 flex gap-2 shadow-md' key={i}>
            <div className="bg-gray-300 w-[170px] h-[130px] animate-pulse"></div>
            <div className='overflow-hidden w-full px-1 py-3'>
              <div className="bg-gray-300 w-52 md:w-56 h-4 rounded-full mb-2 animate-pulse"></div>
              <div className="bg-gray-300 w-32 h-4 rounded-full mb-2 animate-pulse"></div>
              <div className="bg-gray-300 w-32 h-4 rounded-full mb-2 animate-pulse"></div>
              <div className="bg-gray-300 w-32 h-4 rounded-full mb-2 animate-pulse"></div>
              <div className="bg-gray-300 w-32 h-4 rounded-full animate-pulse"></div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page,totalPages,handlePageChange} = useContext(AppContext);
  return (
    <div className='flex space-x-40 fixed bottom-0 bg-red-200 w-full flex justify-center h-[29px] '>
      <div className='flex space-x-4'>
        { page > 1 &&
          <button className='bg-blue-400 px-2 rounded-md '
          onClick={() => handlePageChange(page-1)}>
            Prevous
          </button>
        }

        { page < totalPages &&
          <button className='bg-blue-400 px-2 rounded-md '
          onClick={()=> handlePageChange(page+1)}
          >Next</button>
        }
        
      </div>
      <div>
        <p>Page <span>{page}</span> Of <span>{totalPages}</span></p>
      </div>
    </div>
  )
}

export default Pagination 
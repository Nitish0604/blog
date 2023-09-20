import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';


const Blogs = () => {

  const {posts,loading} = useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[680px] py-2 flex flex-col gap-y-8 mt-[35px] mb-[40px]'>
      {
       loading ? (<Spinner/>) :
       (
        posts.length == 0 ?
        (
          <div><p> No post found</p> </div>
        )
        :(posts.map((post) => (
          <div key={post.id}>
            <p className='text-red-400 font-bold text-lg'>{post.title}</p>
             <p> 
              By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
             </p>
             <p className='tex-[10px]'> posted on <span>{post.date}</span></p>
             <p className='text-[14px] mt-3'>{post.content}</p>
             <div className='flex gap-[3px]'>
              {post.tags.map((tag,index) => {
                return <span key={index} className='text-blue-500 underline font-bold text-[10px] gap-x-2 '>{`#${tag}`}</span>
              }
               
              )}
             </div>
          </div>
        ))
       )
       )
      }


    </div>
  )
}

export default Blogs
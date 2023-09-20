import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import Header from "./components/Header";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect( () =>{
   fetchBlogPosts();
  },[]);
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center p-14">
         
        <Header/>
        <Blogs/>
        <Pagination/>
    </div>
  );
}

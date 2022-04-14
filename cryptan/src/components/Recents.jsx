import {useState, useEffect} from 'react'
import axios from 'axios'

import RecentsList from './RecentsList';

const Recents = (() => {
  const [posts, getPosts] = useState('');
  
  useEffect( () => {
    getRecents();
  }, []);

  const  getRecents = (() => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  axios.get(url)
    .then((response => {
      const posts = response.title
      getPosts(posts)
    }))
    .catch(
      error => console.error(`$error`)
    )
  }  
  )
  
  return (
    <RecentsList posts = {posts}/>
  )
  
})



export default Recents
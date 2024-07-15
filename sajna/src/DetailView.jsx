import React from 'react'
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const DetailView = () => {
    const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  console.log(id);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
    <div className="card">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    </div>
  </div>


  )
}

export default DetailView
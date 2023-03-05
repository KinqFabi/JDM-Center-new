import axios from 'axios'
import React, { useState,  useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import TextField from '@mui/material/TextField';




const Posts = () => {

    const [listOfPosts, setListOfPosts] = useState([])

    useEffect(() => {
        const intervalId = setInterval(() => {
          axios.get('http://localhost:3001/api/posts/allPosts').then((response) => {
            setListOfPosts(response.data);
          });
        }, 1000); // fetch data every second
    
        return () => clearInterval(intervalId); // cleanup function to clear interval on unmount
      }, []);
    

    return (
        <>
            <h1>TEST</h1>
            {listOfPosts.map((value, key) => {
                return (
                    <Container key={key} className='mt-5 p-2'>
                        <h1>{value.postTitle}</h1>
                        <hr />
                        <p>{value.postContent}</p>
                        <p>{value.username}</p>
                        <p>{value.description}</p>
                    </Container>
                )
            }
            )}
        </>
    )
}

export default Posts;

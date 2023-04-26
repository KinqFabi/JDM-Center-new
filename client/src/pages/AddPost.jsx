import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import TextField from '@mui/material/TextField';




const AddPost = ({user}) => {


    const [postTitle, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [postContent, setContent] = useState('')



    const create = async () => {
        const data = { postContent: postContent, postTitle: postTitle, username: user.username, description: description, userId: user.id }
        await axios.post('http://localhost:3001/api/posts/createPost', data).then((res) => {
            console.log(res.data)
        })  
    } 



    return (
        <>
            <Container className='mt-5 p-2'>
                <h1>Add Post</h1>
                <hr />
                <TextField margin="normal" fullWidth variant="standard" label="Content"
                type="text" className="password-field" onChange={(e) => {
                setContent(e.target.value);
                }}></TextField>

                <TextField margin="normal" fullWidth variant="standard" label="Title"
                type="text" className="password-field" onChange={(e) => {
                setTitle(e.target.value);
                }}></TextField>


                <TextField margin="normal" fullWidth variant="standard" label="description"
                type="text" className="password-field" onChange={(e) => {
                setDescription(e.target.value);
                }}></TextField>
                <Button onClick={create} variant="primary" type="submit" >Add Post</Button>
            </Container>
        </>
    )
}

export default AddPost;

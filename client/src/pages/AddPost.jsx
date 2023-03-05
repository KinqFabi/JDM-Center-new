import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import TextField from '@mui/material/TextField';




const AddPost = ({ history }) => {


    const [postTitle, setTitle] = useState('')
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [postContent, setContent] = useState('')

   /* const addProductHandler = async (e) => {

        e.preventDefault()

        // const data = {
        //     title: title,
        //     price: price,
        //     description: description,
        //     published: published
        // }


        const formData = new FormData()


        formData.append('postContent', postContent)
        formData.append('postTitle', postTitle)
        formData.append('username', username)
        formData.append('description', description)

        await axios.post('http://localhost:3001/api/posts/createPost', formData)
        console.log(formData)
        history.push('/posts')
    
    }*/

    const create = async () => {
        const data = { postContent: postContent, postTitle: postTitle, username: username, description: description }
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

                <TextField margin="normal" fullWidth variant="standard" label="username"
                type="text" className="password-field" onChange={(e) => {
                setUsername(e.target.value);
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

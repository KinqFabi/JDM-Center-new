import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <>

            <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem' }}>
                <Card.Img src={post.postContent} />
                <Card.Body>
                    <Card.Title>Title: {post.postTitle}</Card.Title>
                    <Card.Title>Username: {username}</Card.Title>
                    <Card.Text>
                        Description: {post.description.slice(0,10)}...
                    </Card.Text>
                 
                    <Link to={`post/${post.id}`}>
                        <Button>Detail</Button>
                    </Link>
                </Card.Body>
            </Card>
       
           
        </>
    )
}

export default ProductCard

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddMovie.css'

export default function AddMovie({Add}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rate, setRate] = useState(0)
  const [posterUrl, setPosterUrl] = useState('')


  const handleTitle= (e) =>{
    setTitle(e.target.value)
  }
  const handleDescription = (e) =>{
    setDescription(e.target.value)
  }
  const handleRate = (e) =>{
    setRate(e.target.value)
  }
  const handlePosterUrl =(e) =>{
    setPosterUrl(e.target.value)
  }
  const handleAdd=() =>{
    const newMovie ={title,description,rate,posterUrl}
    Add(newMovie)
    handleClose()
  }
 
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',marginTop:'45px' }}>
      <Button className='btn1'  onClick={handleShow}>
        Add a Movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Movie Title</Form.Label>
          <Form.Control onChange={(e)=>handleTitle(e)} placeholder='Movie Title'></Form.Control>
          <Form.Label>Movie Description</Form.Label>
          <Form.Control onChange={(e)=>handleDescription(e)} placeholder='Movie Description'></Form.Control>
          <Form.Label>Movie Rate</Form.Label>
          <Form.Control onChange={(e)=>handleRate(e)} max='5' type='number'placeholder='Movie Rate'></Form.Control>
          <Form.Label>Movie Picture</Form.Label>
          <Form.Control onChange={(e)=>handlePosterUrl(e)} placeholder='Movie Picture'></Form.Control>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}


import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const AddNewMovie = ({ handleAdd }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("")
    const [trailerVideoLink, setTrailerVideoLink] = useState("")
    const [rating, setRating] = useState(0);
    const handleRating = (x) => {
        setRating(x);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id: Math.random(),
            name,
            image,
            date,
            rating,
            description,
            trailerVideoLink,
        };
        handleAdd(newMovie);
        closeModal();
        setName("");
        setImage("");
        setDate("");
        setRating(0);
        setDescription("")
        setTrailerVideoLink("")
    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className='btn-primary' onClick={openModal}>Add</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <label>Movie Name</label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} required />
                    <label>Movie Poster</label>
                    <input type='text' value={image} onChange={e => setImage(e.target.value)} required />
                    <StarRating rating={rating} handleRating={handleRating} />
                    <label>Movie Date</label>
                    <input type='date' value={date} onChange={e => setDate(e.target.value)} required />
                    <label>Movie Description</label>
                    <textarea name="message" cols="30" rows="7" value={description} onChange={e=>setDescription(e.target.value)} required></textarea>
                    <label>Trailer Movie link</label>
                    <input type='text' value={trailerVideoLink} onChange={e => setTrailerVideoLink(e.target.value)} required />
                    <div>
                        <button className='btn' type='submit'>Add</button>
                        <button className='btn' onClick={closeModal}>Cancel</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddNewMovie
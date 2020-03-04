import React from 'react';
import './BearCard.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
const BearCard = props => {
    const form = useSelector(state => state.form)
    const dispatch = useDispatch();
    const deleteBear = async () => {
        const result = await axios.delete(`http://localhost:8080/api/bears/${props.id}`)
        dispatch({ type: 'DELETE_BEAR', id: props.id })
    }
    const updateBear = async () => {
        const result = await axios.put(`http://localhost:8080/api/bears/${props.id}`)
        dispatch({ type: 'UPDATE_BEAR', id: props.id, bear: { ...form, id: props.id } })
    }
    return (
        <div className='bearcard-container'>
            <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='bearcard-weight'>{props.weight}</p>
                <p className='bearcard-name'>{props.name}</p>
            </div>
            <div className='bearcard-actions'>
                <div onClick={updateBear}>Update</div>
                <div onClick={deleteBear}>Delete</div>
            </div>
        </div>

    )
}

export default BearCard;
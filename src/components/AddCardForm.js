import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addCard ,editCard } from '../redux/cardSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import '../index.css';

const AddCardForm = () => {
    const [selectedDate,setSelectedDate]= useState(new Date())
    const bool = useSelector((state) => state.cards.bool);
    const [value, setValue] = useState({
        cardname: "",
        cardbudget: 0,
        carddate: "",
    });
    const dispatch = useDispatch();

    const handlesubmit = (e)=>{
        e.preventDefault()
    
        if (value){
            dispatch(addCard({ data: value, }))
        }
    }

    const handleEdit = (e)=>{
        e.preventDefault()
        dispatch(editCard({ data:value,}))
    }

    useEffect(()=>{
        setValue({...value,carddate:selectedDate.toDateString()})
    },[selectedDate])



  return (
    <form style={{background:"#bcc7cc"}}>
    <label for='name'><strong>Name </strong></label>
    <Input
        style={{marginRight:"20px"}}
        type='text'
        placeholder='Add Projectname...'
        id='name'
        value={value.cardname}
        onChange={(e) => setValue({...value,cardname: e.target.value})}
    ></Input>
    <label for='budget'><strong>Budget </strong></label>
    <Input
        type='number'
        placeholder='Add todo...'
        id='budget'
        value={value.cardbudget}
        onChange={(e) => setValue({...value,cardbudget: e.target.value})}
    ></Input>
    <div className='date'>
    <p><strong>Date</strong></p>
    <DatePicker selected={selectedDate} onChange={date=> setSelectedDate(date)}  dateFormat="dd/MM/yyyy" />
    </div>
    <br></br>
    {bool ? <Button variant="outlined" color="success" onClick={handleEdit}>Edit</Button>:<Button size="small" variant="contained" color="success" onClick={handlesubmit}>
        Submit
    </Button>}
    </form>
  )
}

export default AddCardForm
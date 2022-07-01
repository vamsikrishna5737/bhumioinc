import React from 'react'
import { useDispatch} from 'react-redux'
import { addCard, deleteCard ,addId} from '../redux/cardSlice'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const CardItem = ({id,name,budget,date}) => {
    const dispatch = useDispatch();
    
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#249bd4' : 'lightblue',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));

    const handleDelete = () =>{
        dispatch(deleteCard({id:id}))
    }
    
    const handleCopy = ()=>{
        const val ={
            cardname: name,
            cardbudget: budget,
            carddate: date,
        }
        dispatch(addCard({data: val}))
    }

    const handleId = ()=>{
        dispatch(addId({id:id}))
    }
  return (
    <Item key ={id}>
        <h2 style={{color:'white'}}><strong>Card Name: </strong>{name}</h2>
        <h2 style={{color:'white'}}><strong>Project Budget :</strong>{budget}</h2>
        <h2 style={{color:'white'}}><strong>Project EndDate :</strong>{date}</h2>
        <hr></hr>
        <Button variant='contained'  onClick={handleId}>Edit</Button>
        <Button style={{color:'white',background:'red',margin:'0 30px 0 30px'}} variant='outlined' startIcon={<DeleteIcon />} onClick={handleDelete}>delete</Button>
        <Button variant='contained' onClick={handleCopy}>duplicate</Button>
    </Item>
  )
}

export default CardItem
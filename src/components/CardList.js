import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from './CardItem';
import Grid from '@mui/material/Grid';


const CardList = () => {
    const cards = useSelector((state) => state.cards.data);
    const val = useSelector((state) => state.cards.totalbudget)
    const val1 = useSelector((state) => state.cards.totalprojects)

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',background:'#02adfa',marginBottom:'5px'}}>
    <h2>Total Budget={val} ,</h2>
    <h2>Total Projects={val1}</h2>
    </div>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards.map((card,idx)=>(
              <Grid item xs={2} sm={4} md={4} key={idx}>
            <CardItem  id={idx} name={card.name} budget={card.budget} date={card.date}/>
            </Grid>
        ))}
    </Grid>

    </>
  )
}

export default CardList
import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const cardSlice = createSlice({
    name: 'cards',
    initialState:{
        data: [],
        totalprojects: null,
        totalbudget: null,
        id:null,
        bool:false,
    },
    reducers:{
        addCard: (state, action)=>{
            const card = {
                id: nanoid(),
                name: action.payload.data.cardname,
                budget: Number(action.payload.data.cardbudget),
                date: action.payload.data.carddate,
            };
            state.data.push(card)
            let sum=0
            state.data.forEach((card)=>{
                sum+=card.budget
            })
            state.totalbudget= sum
            state.totalprojects = state.data.length
        },
        deleteCard: (state,action)=>{
            state.data.splice(action.payload.id,1)
            let sum=0
            state.data.forEach((card)=>{
                sum+=card.budget
            })
            state.totalbudget= sum
            state.totalprojects = state.data.length
                    
        },
        addId: (state,action)=>{
            state.id = action.payload.id
            state.bool = true
        },
        editCard: (state,action)=>{
            state.data[state.id] = {...state.data[state.id],name:action.payload.data.cardname,budget:Number(action.payload.data.cardbudget),date:action.payload.data.carddate}
            state.bool = false
            state.id = null
            let sum=0
            state.data.forEach((card)=>{
                sum+=card.budget
            })
            state.totalbudget= sum
        }
        
       
    }
})

export const { addCard, deleteCard ,addId, editCard} = cardSlice.actions;

export default cardSlice.reducer;
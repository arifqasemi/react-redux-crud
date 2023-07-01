import { createSlice, configureStore} from '@reduxjs/toolkit';
import { data as users } from '../component/data.js';
const initialState = { userData:users };

const  InsertSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers: {
        addUser:(state,action)=>{
                   console.log(action.payload);
            state.userData.push(action.payload);
     
        },
        updateUser:(state,action)=>{
            const {id,name,email}= action.payload;
            const userIndex = state.userData.filter((u)=> u.id == id);
            const userId = id -1;
            if (userIndex) {
                state.userData[userId] = {
                  ...state.userData[userId],
                  name: name,
                  email: email,
                };
              }
              console.log(state.userData[userId]);
        },
        deleteUser:(state,action)=>{
            const { id } = action.payload;
            state.userData = state.userData.filter((u) => u.id !== id);
        }
   
    }
})




const store = configureStore({
    reducer:{
        user: InsertSlice.reducer
    }
})

export const insertAction = InsertSlice.actions;

export default store;










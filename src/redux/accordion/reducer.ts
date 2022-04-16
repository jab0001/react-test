import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppRootStateType } from '../index'
import { accordionList } from '../../components/AccordionList/AccordionList'

interface AccordionState {
  list: Array<{ id: number, title: string, text: string }>
}

const initialState: AccordionState = {
  list: []
}

const AccordionSlice = createSlice( {
  name: 'Accordion',
  initialState,
  reducers: {
    setAccordionList( state, data: PayloadAction<AccordionState['list']> ) {
      state.list = data.payload
    }
  },
} )


const getAccordionListFromServer = createAsyncThunk<any, any, { state: AppRootStateType }>( 'getAccordionList', async ( data, thunkApi ) => {
  const { getState, dispatch, fulfillWithValue, rejectWithValue } = thunkApi

  if( getState().accordion.list.length > 0 ) {
    rejectWithValue( 'Already exists' )
  }

  const newList = accordionList.filter( item => !!item )
  dispatch( setAccordionList( newList ) )
} )


export const AccordionReducer = AccordionSlice.reducer
export const { setAccordionList } = AccordionSlice.actions

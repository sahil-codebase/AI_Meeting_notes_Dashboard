import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { MeetingNote } from '../../types/meeting'

interface MeetingState {
  notes: MeetingNote[]
}

const initialState: MeetingState = {
  notes: JSON.parse(localStorage.getItem('notes') || '[]')
}

const meetingSlice = createSlice({
  name: 'meetings',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<MeetingNote>) => {
      state.notes.push(action.payload)

      localStorage.setItem('notes', JSON.stringify(state.notes))
    }
  }
})

export const { addNote } = meetingSlice.actions
export default meetingSlice.reducer

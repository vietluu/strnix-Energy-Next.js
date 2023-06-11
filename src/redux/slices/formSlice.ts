import { api } from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
type State = {
    isLoading: boolean,
    hasErr: boolean
}
const initialState: State = {
    isLoading: false,
    hasErr:false
}
export const sendForm = createAsyncThunk('form/send', async (body: any) => {
    const res: any = await api.post('formRequest',body)
    return res.json()
})

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.
            addCase(sendForm.pending, (state) => {
                state.isLoading = true;
                state.hasErr = false
            })
        .addCase(sendForm.fulfilled, (state) => {
            state.isLoading = false
            state.hasErr = false
        })
        .addCase(sendForm.rejected, (state) => {
            state.hasErr = true
            state.isLoading= false
        })
    },

})
export default formSlice.reducer
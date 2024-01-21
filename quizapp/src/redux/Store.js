import { configureStore } from '@reduxjs/toolkit';
import resultreducer from './resultReducer'

const store = configureStore({
    reducer: {
        result: resultreducer
    }
})

export default store;

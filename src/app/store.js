import { configureStore } from '@reduxjs/toolkit';
import { rankingApi } from '../api/rankingApi';

export default configureStore({
    reducer: {
        [rankingApi.reducerPath]: rankingApi.reducer,
    },
});
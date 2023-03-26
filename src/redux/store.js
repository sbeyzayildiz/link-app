import { configureStore } from "@reduxjs/toolkit";
import linksReducer from './links/LinksSlice';
export const store = configureStore({
    reducer: {
        links: linksReducer
    }
})
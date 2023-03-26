import { createSlice } from '@reduxjs/toolkit';

const links = JSON.parse(localStorage.getItem('links'));

export const LinksSlice = createSlice({
    name: 'links',
    initialState: {
        items: links || [],
        isLoading: false,
    },
    reducers: {
        addLink: (state, action) => {
            const link = action.payload;
            state.items = [...state.items, link];
            localStorage.setItem('links', JSON.stringify(state.items));

        },
        removeLink: (state, action) => {
            const linkId = action.payload;
            const findLinkIndex = state.items.findIndex((link) => link.id === linkId);
            state.items.splice(findLinkIndex, 1);
            localStorage.setItem('links', JSON.stringify(state.items));
        },
        downVoteLink: (state, action) => {
            const linkId = action.payload;
            const findLink = state.items.find((link) => link.id === linkId);
            findLink.vote = findLink.vote - 1;
        },
        upVoteLink: (state, action) => {
            const linkId = action.payload;
            const findLink = state.items.find((link) => link.id === linkId);
            findLink.vote = findLink.vote + 1;
        },
        sortByDate: (state) => {
            state.items.sort((a, b) => {
                return b.date - a.date
            })

        },
        sortDescByVote: (state) => {
            state.items.sort((a, b) => {
                if(b.vote > a.vote) return 1;
                if(b.vote < a.vote) return -1;
                return 0;
            })
        },
        sortAscByVote: (state) => {
            state.items.sort((a, b) => {
                if(b.vote > a.vote) return -1;
                if(b.vote < a.vote) return 1;
                return 0;
            })

        }
    }
});

export const { addLink, removeLink, downVoteLink, upVoteLink, sortDescByVote, sortByDate, sortAscByVote } = LinksSlice.actions;
export default LinksSlice.reducer; 
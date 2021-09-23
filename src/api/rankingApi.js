import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rankingApiHeaders = {
    'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
    'x-rapidapi-key': '94d427ae3bmshc73503aa0e70a96p17524bjsn042894c635c3'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: rankingApiHeaders })

export const rankingApi = createApi({
    reducerPath: 'rankingApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getRankings: builder.query({
            query: () => createRequest(`/world-rankings`)
        })
    })
})

export const {
    useGetRankingsQuery,
} = rankingApi;
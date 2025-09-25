import { apiSlice } from "./apiSlice";

export const testApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNumbers: builder.mutation({
      query: ({ n1, n2 }) => ({
        url: "/add",
        method: "POST",
        body: { n1, n2 },
      }),
    }),

    login : builder.mutation({
        query : (data)=>({
            url : "/login",
            method : 'POST',
            body : data
        })
    })
  }),
});
export const {
  useAddNumbersMutation,
  useLoginMutation,
} = testApiSlice
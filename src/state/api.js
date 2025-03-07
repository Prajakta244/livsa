import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000'}),
    reducerPath:"adminApi",
    tagTypes:["User","Products"],
    endpoints:(builder) =>({
        getUser:builder.query({
            query:(id)=>`general/user/${id}`,
            providesTags:["User"]
        }),
        getProduct:builder.query({
            query:()=>`fetchproducts`,
            providesTags:["Products"]
        }),
        postProduct:builder.mutation({
            query:(body)=>({
                url:`addproduct`,
                method: 'POST',
                body
            })
        }),
        updateProduct:builder.mutation({
            query:({id,body})=>({
                url:`updateproduct/?product_id=${id}`,
                method: 'PUT',
                body
            })
        }),
        deleteproduct:builder.mutation({
            query:({id})=>({
                url:`deleteproduct/?product_id=${id}`,
                method: 'DELETE'
            })
        }),
        uploadFormData: builder.mutation({
            query: (formData) => ({
              url: "/register", // API endpoint
              method: "POST",
              body: formData,
            })
        })
    })
})

export const {
    useUploadFormDataMutation
} = api
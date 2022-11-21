const ADD_NEW_POST = 'ADD_NEW_POST'
const DELETE_POST = 'DELETE_POST'
const ALL_POST = 'ALL_POST'
const USER_POST = 'USER_POST'
const UPDATE_POST = 'UPDATE_POST'

import { useCurrentUser } from '../Core/onboarding'

const initialState = {
    post: [],
}

export const deletePost = data => ({
    type: DELETE_POST,
    data,
})

export const allPost=()=>({
    type:ALL_POST,
})

export const userPosts=()=>({
    type: USER_POST,
})

export const updatePost=()=>({
    type:UPDATE_POST
})

export const addNewPost= data => ({
    type:ADD_NEW_POST,
    data,
})

export const okok = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                post: [
                    ...state.post,
                    {
                        postID: action.postID,
                        postName: action.postName,
                        postPrice: action.postPrice,
                        postDescription: action.postDescription
                    }
                ]
            }
        
        case DELETE_POST:
            const index = state.post.findIndex((post) => post.id === action.id);
            return {
                post: [...state.post.slice(0, index), ...state.post.slice(index+1)]
            }

        case ALL_POST:
            return {
                post: [...state.post]
            }

        case USER_POST:
            const temp = useCurrentUser.id;
            return {
                post: [...state.post.findIndex(temp)]
            }
        case UPDATE_POST:
            return {
                ...state,
                post: action.data.post
            }


        default:
            return state
    }
}
import profileReducer, {addPostAC, deletePostAC} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, post: 'how are you', likeCount: 10},
        {id: 2, post: 'nice day', likeCount: 5},
        {id: 3, post: 'yo yo yo', likeCount: 1},
    ]
}

test('posts length should be incremented', () => {

    // test data
    let action = addPostAC("hey ho")

    // action
    let newState = profileReducer(state,action)

    // expectation
    expect(newState.posts.length).toBe(4)

});

test('after deleting posts length should be decrement', () => {

    // test data
    let action = deletePostAC(1)

    // action
    let newState = profileReducer(state,action)

    // expectation
    expect(newState.posts.length).toBe(2)

});
export const increment = (index) => ({
    type: 'INCREMENT_LIKES',
    index
});

export function addComment(postId, author, comment) {
    console.log('dispatching add comment');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

export function removeComment(postId, i) {
    console.log('remove comment');
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
};
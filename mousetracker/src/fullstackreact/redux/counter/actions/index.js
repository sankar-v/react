export const increment = (ctr) => ({
    type : 'INCREMENT',
    counter : ctr++
})

export const decrement = (ctr) => ({
    type : 'DECREMENT',
    counter : ctr--
})
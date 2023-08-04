export const TotalPrice = (arr) => {
    return arr.reduce((prev, item) => prev + item.price * item.quantity, 0)
}
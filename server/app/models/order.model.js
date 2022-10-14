// const mongoose = require('mongoose')
// import { ORDER_STATUS } from '../constants/order.status'
// const orderSchema = new mongoose.Schema(
//   {
//     orderItems: [
//       {
//         name: { type: String, required: true },
//         count: { type: Number, required: true },
//         image: { type: String, required: true },  
//         price: { type: Number, required: true },
//       },
//     ],
//     shippingAddress: {
//       address: { type: String, required: true },
//       city: { type: String, required: true },
//       country: { type: String, required: true },
//       fullName: { type: String, required: true },
//       postalCode: { type: String, required: true },
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     TotalPrice: {
//       type: Number,
//       default: 0,
//     },
//     Status: {
//       type: String,
//       default: ORDER_STATUS[0],
//     },
//   },
//   {
//     timestamps: true,
//   },
// )

// const Order = mongoose.model('Order', orderSchema)
// export default Order

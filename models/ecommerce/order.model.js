import mongooses from mongooses

const orderItemSchema = new mongooses.Schema({
  orderId: {
    type: mongooses.Schema.Types.ObjectId,
   ref: "user"
  },
  quantity: {
    type: Number,
    required: true 
  }
})
const orderSchema = new mongooses.Schema({
    orderPrice: {
      type: Number,
      required: true
    },
    costumer: {
      type: mongooses.Schema.Types.ObjectId,
      ref: "user"
    },
    orderItems: {
      type: [orderItemSchema]     // here type is = to a schema beacuse it contain
    },                            // multiple thinks that why also we can make a
    status :{                      //  object which cantain the multiple things
      enum: ["pending","cancelled","completed"],
      default: "pending"
    }       
},{timestamp: true})             
                                  

export const order = mongooses.model("order",orderSchema);
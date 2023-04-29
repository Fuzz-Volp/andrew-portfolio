import { Schema, Types, model } from "mongoose";
import { productSchema } from "./productSchema";
import ICart from "../@types/cart";
import ILineItem from "../@types/lineItem";

const lineItemSchema = new Schema<ILineItem>(
  {
    qty: { type: Number, default: 1 },
    product: productSchema,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

lineItemSchema.virtual("extPrice").get(function () {
  if (this.product) {
    return this.qty * this.product.price;
  } else {
    return 0;
  }
});

const cartSchema = new Schema<ICart>(
  {
    lineItem: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
    totalPrice: { type: Number, default: 0 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

cartSchema.virtual("orderTotal").get(function () {
  return this.lineItem.reduce((total, product) => total + product.extPrice, 0);
});

cartSchema.virtual("totalQty").get(function () {
  return this.lineItem.reduce(
    (total: number, product: ILineItem) => total + product.qty,
    0
  );
});

cartSchema.virtual("orderId").get(function () {
  return this.id.slice(-6).toUpperCase();
});

cartSchema.statics.getCart = function () {
  return this.findOneAndUpdate({ isPaid: false }, { upsert: true, new: true });
};

cartSchema.methods.addItemToCart = async function (productId: any) {
  const cart = this;

  const lineItem = cart.lineItem.find(
    (lineItem: { product: { _id: { equals: (arg0: any) => any } } }) =>
      lineItem.product._id.equals(productId)
  );
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const product = await model("Product").findById(productId);
    cart.lineItem.push({ product });
  }
  return cart.save();
};

cartSchema.methods.setItemQty = function (productId: any, newQty: number) {
  const cart = this;
  const lineItem = cart.lineItem.find(
    (lineItem: { product: { _id: { equals: (arg0: any) => any } } }) =>
      lineItem.product._id.equals(productId)
  );
  if (lineItem && newQty <= 0) {
    lineItem.remove();
  } else if (lineItem) {
    lineItem.qty = newQty;
  }
  return cart.save();
};

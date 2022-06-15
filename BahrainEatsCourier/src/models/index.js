// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransportationModes = {
  "DRIVING": "DRIVING",
  "BICYCLING": "BICYCLING"
};

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED",
  "DECLINED_BY_RESTAURANT": "DECLINED_BY_RESTAURANT"
};

const { Courier, Restaurant, Dish, Basket, BasketDish, User, Order, OrderDish } = initSchema(schema);

export {
  Courier,
  Restaurant,
  Dish,
  Basket,
  BasketDish,
  User,
  Order,
  OrderDish,
  TransportationModes,
  OrderStatus
};
import type { ID, String, Int, Float, Boolean } from "./_basic";
import type { Product as BasicProduct } from "./products";

/** - 商品 */
export interface Product extends BasicProduct {
  /** - ID */
  id: ID;
}

/** - 訂單 */
export interface Order {
  /** - ID */
  id: ID;
  /** - 購物車 */
  cart?: Cart;
  /** - 編號 */
  number: String;
  /** - 品項 */
  items: OrderItem[];
  /** - 商品總金額 */
  subtotalPrice: Float;
  /** - 結帳總金額 */
  totalPrice: Float;
  /** - 狀態 */
  status: OrderStatus;
  /** - 寄送方式 */
  receiver?: OrderReceiver;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 訂單輸入 */
interface OrderInput {
  /** - 購物車 ID */
  cartId?: ID;
  /** - 品項 */
  items: OrderItemInput[];
  /** - 寄送方式 */
  receiver?: OrderReceiverInput;
}

/** - 訂單品項 */
export interface OrderItem {
  /** - ID */
  id: ID;
  /** - 商品 */
  product: Product;
  /** - 單價 */
  unitPrice: Float;
  /** - 數量 */
  quantity: Int;
  /** - 小計 */
  totalPrice: FLoat;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 訂單品項輸入 */
interface OrderItemInput {
  /** - 商品 ID */
  productId: ID;
  /** - 數量 */
  quantity: Int;
}

/** - 訂單寄送方式 */
interface OrderReceiver {
  /** - 姓名 */
  fullName: String;
  /** - 手機號碼 */
  mobbile: String;
  /** - 收件地址 */
  address: OrderReceiverAddress;
}

/** - 訂單寄送方式輸入 */
interface OrderReceiverInput {
  /** - 姓名 */
  fullName: String;
  /** - 手機號碼 */
  mobbile: String;
  /** - 收件地址輸入 */
  address: OrderReceiverAddressInput;
}

/** - 訂單寄送方式地址輸入 */
interface OrderReceiverAddressInput {
  /** - 郵遞區號 */
  zipcode?: String;
  /** - 縣市 */
  division: String;
  /** - 區域 */
  subdivision: String;
  /** - 地址 */
  address: String;
}

/** - 訂單寄送方式地址 */
interface OrderReceiverAddress {
  /** - 郵遞區號 */
  zipcode?: String;
  /** - 縣市 */
  division: String;
  /** - 區域 */
  subdivision: String;
  /** - 地址 */
  address: String;
}

/**
 * - 訂單狀態
 *    - `WAITING_FOR_PAYMENT`: 尚未付款
 *    - `WAITING_FOR_SHIPMENT`: 等待出貨
 *    - `DELIVERING`: 寄送中
 *    - `COMPLETED`: 已完成
 * */
export type OrderStatus =
  | "WAITING_FOR_PAYMENT"
  | "WAITING_FOR_SHIPMENT"
  | "DELIVERING"
  | "COMPLETED";

/** - 購物車 */
export interface Cart {
  /** - ID */
  id: ID;
  /** - 品項 */
  items: CartItem[];
  /** - 商品總金額 */
  subtotalPrice: Float;
  /** - 結帳總金額 */
  totalPrice: Float;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 購物車品項 */
export interface CartItem {
  /** - ID */
  id: ID;
  /** - 商品 */
  product: Product;
  /** - 單價 */
  unitPrice: Float;
  /** - 數量 */
  quantity: Int;
  /** - 小計 */
  totalPrice: FLoat;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

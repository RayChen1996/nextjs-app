import type { ID, String, Int, Float, Boolean } from "./_basic";

/** - 商品 */
interface Product {
  /** - ID */
  id: ID;
  /** - 名稱 */
  name: String;
  /** - 副標題 */
  subtitle?: String;
  /** - 代稱 */
  slug?: String;
  /** - 相片 */
  photos: String[];
  /** - 類別 */
  category?: ProductCategory;
  /** - 原價 */
  originalPrice: Float;
  /** - 折扣價 */
  discountPrice?: Float;
  /** - 行銷宣傳文字 */
  promotionalText: String[];
  /** - 描述 */
  description?: String;
  /** - 啟用 */
  enabled: Boolean;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 商品輸入 */
interface ProductInput {
  /** - ID */
  id?: ID;
  /** - 名稱 */
  name: String;
  /** - 副標題 */
  subtitle?: String;
  /** - 代稱 */
  slug?: String;
  /** - 相片 */
  photos: [String];
  /** - 類別 */
  categoryId?: ID;
  /** - 原價 */
  originalPrice: Float;
  /** - 折扣價 */
  discountPrice?: Float;
  /** - 行銷宣傳文字 */
  promotionalText: String[];
  /** - 描述 */
  description?: String;
  /** - 啟用 */
  enabled: Boolean;
}

/** - 商品類別 */
interface ProductCategory {
  /** - ID */
  id: ID;
  /** - 名稱 */
  name: String;
  /** - 副標題 */
  subtitle?: String;
  /** - 代稱 */
  slug?: String;
  /** - 相片 */
  photos: String[];
  /** - 啟用 */
  enabled: Boolean;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}

/** - 商品類別輸入 */
interface ProductCategoryInput {
  /** - ID */
  id?: ID;
  /** - 名稱 */
  name: String!;
  /** - 副標題 */
  subtitle?: String;
  /** - 代稱 */
  slug?: String;
  /** - 相片 */
  photos: String[];
  /** - 啟用 */
  enabled: Boolean;
}

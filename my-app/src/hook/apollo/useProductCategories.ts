import type { ProductCategory } from "@/schema/products";
import { gql, useQuery } from "@apollo/client";

const PRODUCT_CATEGORIES = gql`
  query productCategories {
    productCategories(enabled: true) {
      id
      name
      slug
    }
  }
`;

export type ProductCategoriesParams = {
  searchTerm?: string;
  enabled?: boolean;
  latest?: boolean;
  offset?: number;
  limit?: number;
};

/** - 查詢商品類別列表 */
export default function useProductCategories() {
  const { data, loading } = useQuery(PRODUCT_CATEGORIES, {
    fetchPolicy: "network-only",
    onError() {
      return null;
    },
  });
  return {
    data: (data?.productCategories ?? initialData) as ProductCategory[],
    loading,
  };
}

const initialData: ProductCategory[] = [];

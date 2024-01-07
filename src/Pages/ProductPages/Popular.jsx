import { useGetProductsQuery } from "../../redux/features/productApi";
import ProductCategorySwiper from "./ProductSwiper";

const Popular = () => {
  const { data } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products = data?.Items;
  const filterPopularProducts = (products) => {
    return products?.filter((product) => product?.IsPopular);
  };
  const popularProducts = filterPopularProducts(products);
  return (
    <div className="py-5">
      <ProductCategorySwiper products={popularProducts} title="Popular" />
    </div>
  );
};

export default Popular;

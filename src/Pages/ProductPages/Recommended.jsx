import { useGetProductsQuery } from "../../redux/features/productApi";
import ProductCategorySwiper from "./ProductSwiper";

const Recommended = () => {
  const { data } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const products = data?.Items;
  const filterrecommendedProducts = (products) => {
    return products?.filter((product) => product.IsRecommended);
  };
  const recommendedProducts = filterrecommendedProducts(products);
  return (
    <div className="py-5">
      <ProductCategorySwiper
        products={recommendedProducts}
        title="Recommended"
      />
    </div>
  );
};

export default Recommended;

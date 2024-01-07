import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Shared/Loader";

import { useGetProductsQuery } from "../../redux/features/productApi";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import SingleProductCard from "./SingleProductCard";

const AllProducts = () => {
  const { data, isLoading } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (data?.Items) {
      const options = {
        keys: ["Name"],
        threshold: 0.4,
      };

      const fuse = new Fuse(data?.Items, options);
      setSearchResult(fuse.search(searchText));
    }
  }, [data, searchText]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <p className="flex justify-center text-yellow-500 font-bold text-2xl my-2  underline">Search Your Favorite Item</p>
      <div className="flex justify-center mx-auto px-4">
        <div className="flex justify-end px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {searchResult.length === 0
              ? data?.Items.map((product) => (
                  <SingleProductCard product={product} key={product._id} />
                ))
              : searchResult.map((result) => (
                  <SingleProductCard
                    product={result.item}
                    key={result.item._id}
                  />
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;

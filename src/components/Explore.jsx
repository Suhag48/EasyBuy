import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { fetchData } from "../features/products/productsSlice";

const Explore = () => {
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productsR)

  return (
    <section className="pb-16 md:pb-24 container mx-auto">
      <h2 className="text-xl md:text-2xl font-medium">
        Explore Our Product
      </h2>

      {/* product card */}
      <div className="flex gap-y-6 gap-x-4 flex-wrap mt-10">
        {products && products.slice(0, 12).map((product) => {
          const {id, title, price, discountPercentage, thumbnail} = product;
          return(
            <div key={id} className="border-2 shadow-sm rounded bg-[#fafafa] w-36 md:w-44 lg:w-48 h-auto pb-1 mx-auto">
          <div className="mb-2 overflow-hidden">
            <Link>
              <img
                src={thumbnail}
                alt="product"
                className="w-auto h-24 md:h-32 rounded cursor-pointer duration-500 mx-auto"
              />
            </Link>
          </div>
          <div className="text-sm md:text-base flex flex-col gap-1 p-2 text-gray-700">
            <h3 className="capitalize"> {title.slice(0, 16)} </h3>
            <h4 className="text-gray-700"> Discount: {discountPercentage} </h4>
            <h4 className="text-gray-700"> Price: ${price} </h4>
            <Button className="rounded bg-slate-400 w-full xsm:w-1/2 text-center py-2 cursor-pointer mt-1 text-white">
              Add to cart
            </Button>
          </div>
        </div>
          )
        })}
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link>See More...</Link>
        </Button>
      </div>
    </section>
  );
};

export default Explore;

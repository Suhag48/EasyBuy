import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

import slideFour from "../images/img6.jpg";

const SubCategory = () => {
  return (
    <section className="pb-16 md:pb-24 container mx-auto">
      <h2 className="text-xl md:text-2xl font-medium">
        Browse By Sub Category
      </h2>
      {/* sub category card */}
      <div className="mt-10 flex gap-4 justify-center">
        <div className="bg-gray-100 w-36 h-28 md:w-52 md:h-40 flex flex-col items-center justify-center">
          <Headphones size={40} />
          <h4 className="mt-4">Headphone</h4>
        </div>

        <div className="bg-gray-100 w-36 h-28 md:w-52 md:h-40 flex flex-col items-center justify-center">
          <Headphones size={40} />
          <h4 className="mt-4">Headphone</h4>
        </div>

        <div className="bg-gray-100 w-36 h-28 md:w-52 md:h-40 flex flex-col items-center justify-center">
          <Headphones size={40} />
          <h4 className="mt-4">Headphone</h4>
        </div>

        <div className="bg-gray-100 w-36 h-28 md:w-52 md:h-40 flex flex-col items-center justify-center">
          <Headphones size={40} />
          <h4 className="mt-4">Headphone</h4>
        </div>

        <div className="bg-gray-100 w-36 h-28 md:w-52 md:h-40 flex flex-col items-center justify-center">
          <Headphones size={40} />
          <h4 className="mt-4">Headphone</h4>
        </div>

        <div className="bg-gray-100 w-36 h-28 md:w-52 md:h-40 flex flex-col items-center justify-center">
          <Headphones size={40} />
          <h4 className="mt-4">Headphone</h4>
        </div>
      </div>

      {/* product card */}
      <div className="flex gap-4 flex-wrap lg:flex-nowrap mt-10">
        <div className="border-2 shadow-sm rounded bg-[#fafafa] w-36 md:w-52 h-auto py-1">
          <div className="mb-2 overflow-hidden">
            <Link>
              <img
                src={slideFour}
                alt="product"
                className="w-auto h-24 md:h-32 rounded cursor-pointer duration-500 mx-auto"
              />
            </Link>
          </div>
          <div className="text-sm md:text-base flex flex-col gap-1 p-2 text-gray-700">
            <h3 className="capitalize">kljfdgfdgfd</h3>
            <h4 className="text-gray-700">Discount: 2</h4>
            <h4 className="text-gray-700">Price: $200</h4>
            <button className="rounded bg-slate-400 w-full xsm:w-1/2 text-center py-2 cursor-pointer mt-1 text-white">
              Add to cart
            </button>
          </div>
        </div>

        <div className="border-2 shadow-sm rounded bg-[#fafafa] w-36 md:w-52 h-auto py-1">
          <div className="mb-2 overflow-hidden">
            <Link>
              <img
                src={slideFour}
                alt="product"
                className="w-auto h-24 md:h-32 rounded cursor-pointer duration-500 mx-auto"
              />
            </Link>
          </div>
          <div className="text-sm md:text-base flex flex-col gap-1 p-2 text-gray-700">
            <h3 className="capitalize">kljfdgfdgfd</h3>
            <h4 className="text-gray-700">Discount: 2</h4>
            <h4 className="text-gray-700">Price: $200</h4>
            <button className="rounded bg-slate-400 w-full xsm:w-1/2 text-center py-2 cursor-pointer mt-1 text-white">
              Add to cart
            </button>
          </div>
        </div>

        <div className="border-2 shadow-sm rounded bg-[#fafafa] w-36 md:w-52 h-auto py-1">
          <div className="mb-2 overflow-hidden">
            <Link>
              <img
                src={slideFour}
                alt="product"
                className="w-auto h-24 md:h-32 rounded cursor-pointer duration-500 mx-auto"
              />
            </Link>
          </div>
          <div className="text-sm md:text-base flex flex-col gap-1 p-2 text-gray-700">
            <h3 className="capitalize">kljfdgfdgfd</h3>
            <h4 className="text-gray-700">Discount: 2</h4>
            <h4 className="text-gray-700">Price: $200</h4>
            <button className="rounded bg-slate-400 w-full xsm:w-1/2 text-center py-2 cursor-pointer mt-1 text-white">
              Add to cart
            </button>
          </div>
        </div>

        <div className="border-2 shadow-sm rounded bg-[#fafafa] w-36 md:w-52 h-auto py-1">
          <div className="mb-2 overflow-hidden">
            <Link>
              <img
                src={slideFour}
                alt="product"
                className="w-auto h-24 md:h-32 rounded cursor-pointer duration-500 mx-auto"
              />
            </Link>
          </div>
          <div className="text-sm md:text-base flex flex-col gap-1 p-2 text-gray-700">
            <h3 className="capitalize">kljfdgfdgfd</h3>
            <h4 className="text-gray-700">Discount: 2</h4>
            <h4 className="text-gray-700">Price: $200</h4>
            <button className="rounded bg-slate-400 w-full xsm:w-1/2 text-center py-2 cursor-pointer mt-1 text-white">
              Add to cart
            </button>
          </div>
        </div>

        <div className="border-2 shadow-sm rounded bg-[#fafafa] w-36 md:w-52 h-auto py-1">
          <div className="mb-2 overflow-hidden">
            <Link>
              <img
                src={slideFour}
                alt="product"
                className="w-auto h-24 md:h-32 rounded cursor-pointer duration-500 mx-auto"
              />
            </Link>
          </div>
          <div className="text-sm md:text-base flex flex-col gap-1 p-2 text-gray-700">
            <h3 className="capitalize">kljfdgfdgfd</h3>
            <h4 className="text-gray-700">Discount: 2</h4>
            <h4 className="text-gray-700">Price: $200</h4>
            <button className="rounded bg-slate-400 w-full xsm:w-1/2 text-center py-2 cursor-pointer mt-1 text-white">
              Add to cart
            </button>
          </div>
        </div>

        <div className="border-2 shadow-sm rounded bg-[#fafafa] w-36 md:w-52 h-auto py-1">
          <div className="mb-2 overflow-hidden">
            <Link>
              <img
                src={slideFour}
                alt="product"
                className="w-auto h-24 md:h-32 rounded cursor-pointer duration-500 mx-auto"
              />
            </Link>
          </div>
          <div className="text-sm md:text-base flex flex-col gap-1 p-2 text-gray-700">
            <h3 className="capitalize">kljfdgfdgfd</h3>
            <h4 className="text-gray-700">Discount: 2</h4>
            <h4 className="text-gray-700">Price: $200</h4>
            <button className="rounded bg-slate-400 w-full xsm:w-1/2 text-center py-2 cursor-pointer mt-1 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link>See More...</Link>
        </Button>
      </div>
    </section>
  );
};

export default SubCategory;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { fetchData } from "../../features/products/productsSlice";
import { fetchCategory } from "../../features/category/categorySlice";

import sidebarHero from "../../images/img6.jpg";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsR);
  // const { category } = useSelector((state) => state.categoryR);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCategory());
  }, []);

  return (
    <section className="py-16 md:py-24 container mx-auto">
      {/* hero section */}
      <div className="w-full h-auto">
        <img src={sidebarHero} alt="" className="w-full h-full" />
      </div>

      <div className="mt-20">
        
          {/* search by category */}
          <div className="flex flex-col w-2/3 lg:w-full lg:flex-row lg:justify-center mx-auto gap-4 lg:gap-12">
            <div className="flex space-x-4 lg:space-x-2">
              <Input
                type="text"
                placeholder="category"
                className="border border-amber-500"
              />
              <Button>search</Button>
            </div>
            {/* search by product name */}
            <div className="flex space-x-4 lg:space-x-2">
              <Input
                type="text"
                placeholder="name"
                className="border border-amber-500"
              />
              <Button>search</Button>
            </div>
            {/* search by price */}
            <div className="flex space-x-4 lg:space-x-2">
              <Input
                type="number"
                placeholder="price"
                className="border border-amber-500"
              />
              <Button>search</Button>
            </div>
          </div>

          {/* product card */}
          <div className="flex justify-center gap-y-6 gap-x-4 flex-wrap mt-14">
            {products &&
              products.slice(0, 30).map((item) => {
                const { id, title, price, thumbnail, discountPercentage } =
                  item;
                return (
                  <Card
                    key={id}
                    className="border-2 shadow-sm rounded bg-[#fafafa] w-36 md:w-40 lg:w-48"
                  >
                    <div className="overflow-hidden">
                      <Link to={`/singleProduct/${id}`}>
                        <img
                          src={thumbnail}
                          alt={title.slice(0, 20)}
                          className="w-auto h-24 md:h-28 rounded cursor-pointer duration-500 mx-auto"
                        />
                      </Link>
                    </div>
                    <CardContent className="text-sm md:text-base flex flex-col gap-y-1 mt-2 text-gray-700 p-2">
                      <h3 className="capitalize"> {title.slice(0, 18)} </h3>
                      <h4 className="text-gray-700">
                        {" "}
                        Discount: {discountPercentage}{" "}
                      </h4>
                      <h4 className="text-gray-700"> Price: ${price} </h4>
                      <Button className="rounded bg-slate-400 w-full xsm:w-1/2 text-center cursor-pointer mt-1 text-white">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        
      </div>

      {/* pagination */}
      <div className="mt-16">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Products;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

import { fetchData } from "../features/products/productsSlice";

const FlashSale = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productsR);

  const filteredProducts = products.filter(
    (product) => product.discountPercentage > 10
  );

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // Set the target date
  const targetDate = new Date("Oct 31, 2024 23:59:59").getTime();

  // Initialize state for hours, minutes, and seconds
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Effect to update the countdown every second
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = targetDate - now;

  //     if (distance > 0) {
  //       setTimeLeft({
  //         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
  //         hours: Math.floor(
  //           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //         ),
  //         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  //         seconds: Math.floor((distance % (1000 * 60)) / 1000),
  //       });
  //     } else {
  //       clearInterval(intervalId);
  //       setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  //     }
  //   }, 1000);

  //   // Clear interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [targetDate]);

  return (
    <section className="container mx-auto pb-16 md:pb-24">
      <div className="flex">
        <div>
          <h2 className="text-xl md:text-2xl font-medium">Flash Sales</h2>
        </div>
        <div className="flex gap-12 mx-auto">
          <div>
            <p>Day</p>
            <h2 className="text-center mt-2 text-lg">{timeLeft.days}</h2>
          </div>
          <div>
            <p>Hours</p>
            <h2 className="text-center mt-2 text-lg">{timeLeft.hours}</h2>
          </div>
          <div>
            <p>Minutes</p>
            <h2 className="text-center mt-2 text-lg">{timeLeft.minutes}</h2>
          </div>
          <div>
            <p>Seconds</p>
            <h2 className="text-center mt-2 text-lg">{timeLeft.seconds}</h2>
          </div>
        </div>
      </div>

      {/* product card */}
      <div className="flex gap-y-6 gap-x-4 flex-wrap mt-10">
        {filteredProducts &&
          filteredProducts.slice(0, 12).map((product) => {
            const { id, title, price, discountPercentage, thumbnail } = product;
            return (
              <div
                key={id}
                className="border-2 shadow-sm rounded bg-[#fafafa] w-36 md:w-44 lg:w-48 h-auto pb-1 mx-auto"
              >
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
                  <h4 className="text-gray-700">
                    Discount: {discountPercentage}
                  </h4>
                  <h4 className="text-gray-700"> Price: ${price} </h4>
                  <Button className="rounded bg-slate-400 w-full xsm:w-1/2 text-center py-2 cursor-pointer mt-1 text-white">
                    Add to cart
                  </Button>
                </div>
              </div>
            );
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

export default FlashSale;

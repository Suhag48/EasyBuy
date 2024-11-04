import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRight, Heart, Share2, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { fetchSingleProduct } from "../../features/singleProduct/singleProductSlice";

const SingleProduct = () => {
  const [isWishlist, setIsWishlist] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  const singleProduct = useSelector(
    (state) => state.singleProductR.singleProduct
  );

  const {
    title,
    price,
    description,
    brand,
    category,
    dimensions,
    discountPercentage,
    images,
    rating,
    returnPolicy,
    stock,
    tags,
    warrantyInformation,
    weight,
    thumbnail,
  } = singleProduct;

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const [mainImage, setMainImage] = useState(thumbnail);

  // discount price
  const discoutPrice = price - (price * discountPercentage) / 100;

  return (
    <section className="px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-16 lg:px-24 lg:py-20 flex flex-col items-center">
      <Card className="flex flex-col items-center md:items-start sm:flex-row gap-6 lg:w-4/5 bg-neutral-100 shadow-md text-gray-900 pt-4">
        {/* product image */}
        <CardContent className="sm:w-1/2">
          <div className="h-40 w-full md:h-80 bg-white">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full rounded-lg shadow-lg mb-4"
            />
          </div>
          <div className="flex gap-2 md:gap-4 mt-4 md:mt-6">
            {images?.map((img, index) => {
              return (
                <Card key={index} className="bg-white">
                  <img
                    src={img}
                    alt={title}
                    onClick={() => setMainImage(img)}
                    className="w-16 h-16 md:w-28 md:h-28 object-cover rounded cursor-pointer"
                  />
                </Card>
              );
            })}
          </div>
        </CardContent>

        {/* product Info */}
        <CardContent className="sm:w-1/2">
          <div className="flex flex-col gap-2">
            <em className="flex items-center gap-1">
              {category} <ChevronRight size={14} /> {tags}
            </em>
            {brand ? (
              <h3>
                {" "}
                <span className="font-medium">Brand:</span> {brand}{" "}
              </h3>
            ) : (
              ""
            )}
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
              {" "}
              {title}{" "}
            </h3>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="leading-7 italic"> {description} </p>
            <h3>
              {" "}
              <span className="font-medium">Discount:</span>{" "}
              {discountPercentage}%{" "}
            </h3>
            <h3>
              {" "}
              <span className="font-medium">Stock:</span> {stock}{" "}
            </h3>
          </div>
          <Tabs defaultValue="warranty" className="w-full my-6">
            <TabsList className="space-x-4 md:space-x-8">
              <TabsTrigger value="features" className="md:text-base">
                Features
              </TabsTrigger>
              <TabsTrigger value="warranty" className="md:text-base">
                Warranty
              </TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <ul className="flex flex-col gap-2 ml-4 p-2 list-disc text-gray-700 marker:text-slate-500">
                <li> width: {dimensions?.width} </li>
                <li> height: {dimensions?.height} </li>
                <li> depth: {dimensions?.depth} </li>
                <li> weight: {weight} </li>
                <p className="mt-2 italic"> {returnPolicy} </p>
              </ul>
            </TabsContent>
            <TabsContent value="warranty">
              <em className="ml-4 p-2 text-gray-700">{warrantyInformation}</em>
            </TabsContent>
          </Tabs>
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <h3>
                <del className="text-red-500 mr-1"> ${price} </del>
                {discoutPrice.toFixed(2)}
              </h3>
              <div className="flex space-x-2">
                <Button
                  onClick={() => setIsWishlist(!isWishlist)}
                  variant="outline"
                  size="icon"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isWishlist ? "fill-current text-red-500" : ""
                    }`}
                  />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="rounded bg-slate-400 text-white hover:bg-slate-400 hover:text-white w-full xsm:w-1/2 text-center cursor-pointer mt-1"
            >
              <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SingleProduct;

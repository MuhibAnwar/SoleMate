import React from "react";
import { Product } from "@/types/types";
import Image from "next/image";


interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className=" bg-white p-4 border rounded-lg shadow-md hover:shadow-lg  hover:scale-105 transition duration-300">
      <Image
        src={image}
        alt={name}
        className="w-full h-40 object-cover mb-4 rounded-md transition  transform duration-300 hover:scale-105 ease-in-out"
        width={300}
        height={300}
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4 text-lg">${price} </p>
      <button
        onClick={() =>
          onAddToCart({ id, name, price, image }) // Pass the product details
        }
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg ease-in-out hover:bg-blue-600 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
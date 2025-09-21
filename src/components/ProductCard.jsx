import { HiStar } from "react-icons/hi";

const ProductCard = ({ product }) => {
  const fullStars = Math.round(product.ratingValue || 0);

  return (
    <div className="bg-sky-50 border-2 border-gray-400 rounded-md overflow-hidden shadow-sm hover:shadow-xl transition w-full h-80">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover  shadow-lg transition"
        />
        {product.isHot && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            HOT
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col justify-between pt-3 h-[180px]">
        {/* Product Title max 2 lines */}
        <h3 className="text-sm font-bold text-gray-800 line-clamp-2">{product.name}</h3>

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mt-0">
          <span className="text-indigo-600 font-semibold text-lg">₹{product.discountPrice}</span>
          <span className="text-gray-400 line-through text-sm">₹{product.price}</span>
          <span className="text-green-600 text-sm">-{product.discountPercent}%</span>
        </div>

        {/* Rating + Colors */}
        <div className="mb-5">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 ">
              {Array.from({ length: 5 }).map((_, i) => (
                <HiStar key={i} className={`w-4 h-4 ${i < fullStars ? "opacity-100" : "opacity-30"}`} />
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            {product.colors?.slice(0, 4).map((c, i) => (
              <span
                key={i}
                className="w-4 h-4 rounded-full "
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;

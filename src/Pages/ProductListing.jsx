import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import products from "../data/products";

// helper to break array into chunks
const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const useQuery = () => new URLSearchParams(useLocation().search);

function ProductListing() {
  const navigate = useNavigate();
  const query = useQuery();

  // query params
  const qPage = parseInt(query.get("page") || "1", 10);
  const qSort = query.get("sort") || "popularity";
  const qOrder = query.get("order") || "desc";

  const [currentPage, setCurrentPage] = useState(qPage);
  const [sortKey, setSortKey] = useState(qSort);
  const [sortOrder, setSortOrder] = useState(qOrder);

  // items per page responsive
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerPage(6); // desktop
      else if (w >= 640) setItemsPerPage(6); // tablet
      else setItemsPerPage(4); // mobile 2x2
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // sync to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (currentPage > 1) params.set("page", currentPage);
    if (sortKey !== "popularity") params.set("sort", sortKey);
    if (sortOrder !== "desc") params.set("order", sortOrder);
    navigate(`?${params.toString()}`, { replace: true });
  }, [currentPage, sortKey, sortOrder, navigate]);

  // sorted data
  const sorted = useMemo(() => {
    const arr = [...products];
    if (sortKey === "name") {
      arr.sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    } else if (sortKey === "price") {
      arr.sort((a, b) =>
        sortOrder === "asc"
          ? a.discountPrice - b.discountPrice
          : b.discountPrice - a.discountPrice
      );
    } else {
      arr.sort((a, b) =>
        sortOrder === "asc"
          ? a.ratingCount - b.ratingCount
          : b.ratingCount - a.ratingCount
      );
    }
    return arr;
  }, [sortKey, sortOrder]);

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const visible = sorted.slice(start, start + itemsPerPage);

  const slides = chunk(sorted, itemsPerPage);
  const isMobileMode = itemsPerPage === 4;

  return (
    <div className="flex pt-20 md:pt-14">

      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 ">

        <Banner />

        {/* Sorting + Top Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 my-4">
          <div className="flex items-center gap-2 shadow-lg py-2 px-5 bg-blue-100 rounded-lg ">
            <label className="text-sm text-gray-700">Sort:</label>
            <select
              value={sortKey}
              onChange={(e) => {
                setSortKey(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-1 outline-2  outline-sky-600 rounded-lg font-bold  transition "
            >
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
            <button
              onClick={() =>
                setSortOrder((s) => (s === "asc" ? "desc" : "asc"))
              }
              className="ml-2 px-2 py-1 outline-1 outline-sky-600  rounded-lg"
            >
              {sortOrder === "asc" ? "Asc" : "Desc"}
            </button>
          </div>

          <div className="hidden md:flex w-full md:w-auto">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        {/*  Mobile Slider */}
        {isMobileMode ? (
          <div className="overflow-x-auto">
            <div className="flex gap-4">
              {slides.map((pageItems, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2 gap-3 flex-shrink-0 w-[calc(100%-1rem)]"
                >
                  {pageItems.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}


        {/* Bottom Pagination */}
        <div className="mt-6 hidden md:flex justify-center ">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
    </div>
  );
}

export default ProductListing;

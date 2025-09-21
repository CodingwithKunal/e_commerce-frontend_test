

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

 
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };


  return (
    <div className="flex items-center justify-between gap-3 px-3 py-2 bg-teal-50 shadow rounded-md">
      <div className="hidden md:flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 rounded disabled:opacity-40 hover:bg-gray-100 transition"
        >
          Prev
        </button>

        {getPages().map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 rounded-md transition ${p === currentPage ? "bg-indigo-600 text-white shadow" : "hover:bg-indigo-50 text-gray-700"
              }`}
          >
            {p}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-40 transition"
        >
          Next
        </button>
      </div>

    
    </div>
  );
};

export default Pagination;

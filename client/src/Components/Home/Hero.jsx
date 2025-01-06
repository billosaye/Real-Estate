import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image Section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Find Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8">
          Discover the perfect property in your favorite location
        </p>

        {/* Search Form Section */}
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Location Input */}
            <input
              type="text"
              placeholder="Location"
              className="flex-1 p-3 border rounded text-gray-700"
            />

            {/* Property Type Dropdown */}
            <select className="flex-1 p-3 border rounded text-gray-700">
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>

            {/* Search Button */}
            <button className="bg-secondary text-gray-700 px-8 py-3 rounded hover:bg-opacity-90 flex items-center justify-center gap-2">
              <FaSearch />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import properties from "../../Data/Properties";

export default function FeaturedProperties() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-secondary font-bold text-xl">{property.price}</span>
                  <div className="text-gray-600">
                    <span>{property.beds} beds</span> • <span>{property.baths} baths</span>
                  </div>
                </div>
                <p className="text-gray-600">{property.sqft} sq ft</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CallToAction() {
    return (
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of satisfied homeowners who found their perfect property with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 font-semibold">
              Browse Properties
            </button>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 font-semibold">
              Contact Agent
            </button>
          </div>
        </div>
      </section>
    );
  }

  
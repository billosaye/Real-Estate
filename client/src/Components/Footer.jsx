

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p>&copy; {new Date().getFullYear()} LuxuryHomes. All rights reserved.</p>
      </div>
    </footer>
  );
}
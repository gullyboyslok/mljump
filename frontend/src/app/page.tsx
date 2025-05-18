import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            mljump
          </Link>
          <div className="flex space-x-6">
            <Link href="#features" className="text-gray-300 hover:text-orange-500 transition">
              Features
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-orange-500 transition">
              Documentation
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-orange-500 transition">
              About
            </Link>
            <Link href="/signin" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Sign In
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Make Machine Learning <span className="text-orange-500">Accessible</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Build, train, and export ML models without advanced programming knowledge. Perfect for developers and non-technical users alike.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/get-started" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Start for Free
            </Link>
            <Link href="/docs" className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
              View Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">Easy Model Building</h3>
              <p className="text-gray-300">Create powerful machine learning models through our intuitive interface, no coding required.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">Export to API</h3>
              <p className="text-gray-300">Seamlessly export your models to API endpoints for easy integration into your projects.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">Download Models</h3>
              <p className="text-gray-300">Download your trained models in various formats for use in your applications.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

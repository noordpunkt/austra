export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-black dark:text-white">
            Austra
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Explore
            </a>
            <button className="px-4 py-2 text-black dark:text-white hover:opacity-70 transition-opacity">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white leading-tight">
                Delightful
                <br />
                experiences
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-white font-light">
                start here.
              </p>
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Set up your project, invite collaborators and build amazing things. Create something memorable today.
            </p>
            <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity font-medium text-lg">
              Create Your First Project
            </button>
          </div>

          {/* Right Image Placeholder */}
          <div className="hidden md:block">
            <div className="w-full h-[500px] bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700">
              <div className="text-center space-y-2">
                <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-500 text-sm">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Discover
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Help
              </a>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 px-4">
      <div className="text-center">
        {/* Error Number */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-100">
          Oops! Page Not Found
        </h2>

        {/* Message */}
        <p className="mt-2 text-sm md:text-lg text-gray-300">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="/"
            className="btn bg-gradient-to-r from-cyan-500 to-teal-400 border-0 text-white hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
}

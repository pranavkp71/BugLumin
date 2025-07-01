import { Link } from "react-router-dom";
import axios from "axios";

export default function PublicHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-gray-950 border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            🐞 Buglumin
          </Link>
          <div className="flex space-x-6">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a>
            <a href="#why-us" className="hover:text-blue-400 transition">Why Us</a>
            <a href="#join" className="hover:text-blue-400 transition">Join</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6 animate-pulse">
          🐞 Buglumin
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Unleash the power of collaborative debugging with real-time insights, public snapshot sharing, and futuristic AI fixes—all free and open-source for every developer.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <Link
            to="/home"
            className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Enter the Debug Realm
          </Link>
          <a
            href="https://github.com/pranavkp71/BugLumin"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          >
            Dive into Code Cosmos
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-850">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Unleash Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Snapshot Mastery</h3>
              <p className="text-gray-400">
                Capture code, logs, and metadata in seconds, even offline, with our CLI-powered snapshot system.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Public Collaboration Hub</h3>
              <p className="text-gray-400">
                Share snapshots globally with a single command, inviting community insights without barriers.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Future-Ready AI</h3>
              <p className="text-gray-400">
                Get cutting-edge AI suggestions to fix bugs, coming soon to revolutionize your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            How Buglumin Works: A to Z
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Step 1: Capture Your Bug</h3>
              <p className="text-gray-400">
                Use the CLI to upload your code, logs, and environment details as a snapshot. Works offline with automatic sync.
              </p>
              <p className="mt-2 text-sm text-gray-500 italic">Example: <code>buglumin_cli.py push bug.py --log-file error.log</code></p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Step 2: Explore & Annotate</h3>
              <p className="text-gray-400">
                Dive into snapshots via the web UI or CLI, viewing code and logs, and add comments for team collaboration.
              </p>
              <p className="mt-2 text-sm text-gray-500 italic">Example: <code>buglumin_cli.py view a1b2c3d4-...</code></p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Step 3: Share with the World</h3>
              <p className="text-gray-400">
                Create a public URL to share your snapshot, enabling global feedback without accounts.
              </p>
              <p className="mt-2 text-sm text-gray-500 italic">Example: <code>buglumin_cli.py share --id a1b2c3d4-... --confirm</code></p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Step 4: Live Sync (Soon)</h3>
              <p className="text-gray-400">
                Future updates will bring real-time editing with teammates in a shared debug space.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Step 5: AI Magic (Soon)</h3>
              <p className="text-gray-400">
                Unlock AI-driven bug fixes to accelerate your development process.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Step 6: Document & Shine</h3>
              <p className="text-gray-400">
                Export detailed PDF reports to showcase your debugging prowess.
              </p>
              <p className="mt-2 text-sm text-gray-500 italic">Example: Via API or future CLI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-gray-850">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Why Buglumin Stands Out
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <li className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-blue-300 font-semibold">Free & Open-Source</span> - No costs, MIT-licensed for all.
            </li>
            <li className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-blue-300 font-semibold">Offline Power</span> - Works seamlessly in low-connectivity zones.
            </li>
            <li className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-blue-300 font-semibold">Public Sharing</span> - Collaborate globally, unlike restricted tools.
            </li>
            <li className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-blue-300 font-semibold">Developer-Centric</span> - Focused on code, not enterprise bloat.
            </li>
          </ul>
        </div>
      </section>

      {/* Join the Community Section */}
      <section id="join" className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Join the Debug Revolution
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Experience Buglumin and help shape its future. Share your insights, report bugs, or suggest features as we build a community-driven tool.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios.post('http://localhost:5000/feedback', { comment: e.target.comment.value });
            e.target.reset();
            alert("Feedback submitted! Thank you!");
          }}
          className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            name="comment"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            placeholder="Your feedback or idea..."
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Launch Feedback
          </button>
        </form>
        <p className="mt-4 text-gray-500 text-sm">
          Your input fuels our cosmic journey—thank you!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-gray-500 text-sm">
        <p>© 2025 Buglumin | Crafted by the Code Nebula Collective | <a href="https://github.com/pranavkp71/BugLumin" className="underline">GitHub Portal</a></p>
      </footer>
    </div>
  );
}
import { Link } from "react-router-dom";
import axios from "axios";

export default function PublicHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      <section className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-end items-center">
          <Link
            to="/login"
            className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Join Easy Team Work
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-12 pt-40">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6 animate-pulse leading-tight pb-2">
          🐞 Buglumin
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Start an exciting debugging adventure with easy teamwork, worldwide snapshot sharing, and soon to reveal AI magic all free, open-source, and made for bold coders.
        </p>
        <p className="text-gray-400 mb-10 max-w-2xl">
          Currently in MVP: Capture snapshots via CLI, explore them on the web, and share publicly.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <Link
            to="/home"
            className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Dive In Now
          </Link>
          <a
            href="https://github.com/pranavkp71/BugLumin"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          >
            Explore on GitHub
          </a>
        </div>
      </section>

      {/* Current Features */}
      <section id="current-features" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.2] text-center mb-12 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Unleash Today’s Powerhouse Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Snapshot Mastery</h3>
              <p className="text-gray-400">
                Capture code, logs, and metadata instantly with our CLI works flawlessly offline and syncs effortlessly.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Global Sharing Hub</h3>
              <p className="text-gray-400">
                Share snapshots worldwide with a single click, inviting a global community to collaborate and inspire.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Web Insight Portal</h3>
              <p className="text-gray-400">
                Explore and analyze snapshots via our sleek web interface your debugging control center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section id="upcoming-features" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.2] text-center mb-12 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Peek at Exciting Upcoming Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Live Collaboration Arena</h3>
              <p className="text-gray-400">
                Soon, team up in real-time to conquer bugs together in an immersive debug space.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">AI-Powered Genius</h3>
              <p className="text-gray-400">
                Anticipate AI that analyzes snapshots and suggests brilliant fixes coming to revolutionize your workflow.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-blue-300">Secure Authentication</h3>
              <p className="text-gray-400">
                Log in to personalize your experience and unlock exclusive tools rolling out soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.2] text-center mb-12 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Step into the Debugging Magic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Step 1: Capture Your Code",
                desc: "Use the CLI to snapshot bugs instantly offline by design, synced like magic.",
                example: "buglumin_cli.py push bug.py --log-file error.log",
              },
              {
                title: "Step 2: Dive into Insights",
                desc: "Explore snapshots via our web portal or CLI add notes to spark team creativity.",
                example: "buglumin_cli.py view <snapshot_id>",
              },
              {
                title: "Step 3: Share Globally",
                desc: "Generate a public link to share your snapshot unlock a world of feedback.",
                example: "buglumin_cli.py share --id <snapshot_id> --confirm",
              },
            ].map(({ title, desc, example }) => (
              <div key={title} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-medium mb-2 text-blue-300">{title}</h3>
                <p className="text-gray-400">{desc}</p>
                {example && (
                  <p className="mt-2 text-sm text-gray-500 italic">
                    Example: <code>{example}</code>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold leading-[1.2] text-center mb-12 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Ignite Your Debugging Passion
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            {[
              ["Free & Open-Source", "Empower your skills with zero cost, MIT-licensed."],
              ["Offline Mastery", "Debug anywhere, anytime uninterrupted by connectivity."],
              ["Global Community", "Connect with developers worldwide for boundless inspiration."],
              ["Coder Centric", "Designed for developers, free from corporate clutter."],
            ].map(([title, desc]) => (
              <li key={title} className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-blue-300 font-semibold">{title}</span> – {desc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Join the Revolution */}
      <section id="join" className="py-16 text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold leading-[1.2] text-center mb-12 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Shape the Debug Revolution
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Join Buglumin’s journey. Share ingenious ideas, report bugs, or become part of a vibrant community your contribution ignites our next leap.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios.post("http://localhost:5000/feedback", {
              comment: e.target.comment.value,
            });
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
            Send
          </button>
        </form>
        <p className="mt-4 text-gray-500 text-sm">
          Your ideas fuel our journey to greatness thank you
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-gray-500 text-sm">
        <p>
          © 2025 Buglumin |{" "}
          <a href="https://github.com/pranavkp71/BugLumin" className="underline">
            GitHub Portal
          </a>
        </p>
      </footer>
    </div>
  );
}
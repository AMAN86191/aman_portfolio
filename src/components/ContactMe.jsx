export default function ContactMe() {
  return (
    <div className="w-full h-screen max-w-4xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">Contact Me</h2>

      <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Subject</label>
          <input
            type="text"
            placeholder="What's your message about?"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Your Message</label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

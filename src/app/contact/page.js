export default function ContactPage() {
    return (
      <main className="min-h-screen bg-blue-100 text-black px-6 py-16 flex items-center justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
          {/* Left Side Content */}
          <div>
            <h1 className="text-5xl font-extrabold mb-6">Contact me!</h1>
            <h2 className="text-2xl font-semibold mb-4">
              Have any questions? Fill out the form and I’ll get you a response soon!
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              You can also email me directly for inquiries:
            </p>
            <a href="mailto:karimsakirul@gmail.com" className="underline text-black font-medium hover:text-blue-700">
              karimsakirul@gmail.com
            </a>
          </div>
  
          {/* Right Side Form */}
          <form action="https://formspree.io/f/xdkgjekj" method="POST" className="space-y-6">
  <div className="flex gap-4">
    <div className="flex-1">
      <label className="block text-sm mb-1">First Name</label>
      <input name="firstName" type="text" required className="w-full p-2 rounded-md border border-black text-black" />
    </div>
    <div className="flex-1">
      <label className="block text-sm mb-1">Last Name</label>
      <input name="lastName" type="text" required className="w-full p-2 rounded-md border border-black text-black" />
    </div>
  </div>

  <div>
    <label className="block text-sm mb-1">Email</label>
    <input name="email" type="email" required className="w-full p-2 rounded-md border border-black text-black" />
  </div>

  <div>
    <label className="block text-sm mb-2">Which are you?</label>
    <div className="space-y-2 text-sm">
      <label className="flex items-center gap-2">
        <input type="checkbox" name="audience" value="Student" className="accent-blue-600" />
        Student
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" name="audience" value="Recruiter" className="accent-blue-600" />
        Recruiter
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" name="audience" value="Company" className="accent-blue-600" />
        Company
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" name="audience" value="Other" className="accent-blue-600" />
        Other
      </label>
    </div>
  </div>

  <div>
    <label className="block text-sm mb-1">Message</label>
    <textarea name="message" rows="4" required className="w-full p-2 rounded-md border border-black text-black" />
  </div>

  <div>
    <button type="submit" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
      Send
                    </button>
                </div>
            </form>
        </div>
      </main>
    );
  }
  
const Contact = () => {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-left">Name</label>
          <input type="text" id="name" className="w-full border rounded p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-left">Email</label>
          <input type="email" id="email" className="w-full border rounded p-2" />
        </div>
        <div>
          <label htmlFor="message" className="block text-left">Message</label>
          <textarea id="message" className="w-full border rounded p-2" rows="4"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
      </form>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Follow Me</h2>
        <nav className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500">Twitter</a>
          <a href="#" className="text-blue-500">LinkedIn</a>
          <a href="#" className="text-blue-500">GitHub</a>
        </nav>
      </div>
    </div>
  );
};

export default Contact;
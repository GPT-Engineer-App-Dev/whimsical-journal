const Index = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg mb-4">
        Hi there! I'm excited to share my thoughts and experiences with you. 
        This blog covers a variety of topics that I'm passionate about. 
        Stay tuned for the latest updates!
      </p>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Recent Posts</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded">
            <h3 className="text-2xl font-semibold">Post Title 1</h3>
            <p className="text-left">This is a brief excerpt of the first post...</p>
          </li>
          <li className="border p-4 rounded">
            <h3 className="text-2xl font-semibold">Post Title 2</h3>
            <p className="text-left">This is a brief excerpt of the second post...</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
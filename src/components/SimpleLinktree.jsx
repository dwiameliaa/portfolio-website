function SimpleLinktree() {
  const links = [
    { id: 1, label: "Instagram", url: "https://instagram.com" },
    { id: 2, label: "LinkedIn", url: "https://linkedin.com" },
    { id: 3, label: "Twitter", url: "https://twitter.com" },
    { id: 4, label: "GitHub", url: "https://github.com" },
    { id: 5, label: "Blog", url: "https://yourblog.com" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-8">
      <div className="text-center mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">Markas</h1>
        <p className="text-gray-600 mt-2">Dan surabaya JS</p>
      </div>

      <div className="w-full max-w-md px-4 py-6 bg-white rounded-lg shadow-md">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SimpleLinktree;

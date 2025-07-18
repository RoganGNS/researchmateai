export default function SearchBar() {
  return (
    <div className="flex w-full max-w-xl mb-4">
      <input
        type="text"
        placeholder="Search for papers by keyword..."
        className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
      />
      <button className="bg-blue-600 text-white px-4 rounded-r">Search</button>
    </div>
  );
}

import React from "react";

const SearchInput = () => {

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
  }

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <form>
        <div className="flex w-96 rounded bg-white">
          <input
            className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none"
            id="search"
            name="search"
            onChange={handleInput}
            placeholder="Search Artist"
            type="search"
          />
          <button className="m-2 rounded bg-green-600 px-4 py-2 text-white">
            Search
          </button>
        </div>
      </form>
    </main>
  );
};

export default SearchInput;

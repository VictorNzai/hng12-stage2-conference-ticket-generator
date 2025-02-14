import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 border-b border-gray-700 text-white">
      <div className="text-xl font-bold">ticz</div>
      <div className="flex space-x-8">
        <Link href="/">Events</Link>
        <Link href="/my-tickets">My Tickets</Link>
        <Link href="/about">About Project</Link>
      </div>
      <button className="border border-white py-2 px-4 rounded-lg">MY TICKETS →</button>
    </nav>
  );
};

export default Navbar;

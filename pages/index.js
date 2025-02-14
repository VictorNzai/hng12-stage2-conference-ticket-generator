import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  const router = useRouter();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const tickets = [
    { type: "Free", price: "0", description: "REGULAR ACCESS", available: "20/52" },
    { type: "VIP", price: "150", description: "VIP ACCESS", available: "20/52" },
    { type: "VVIP", price: "150", description: "VVIP ACCESS", available: "20/52" },
  ];

  return (
    <div className="min-h-screen bg-[#02191D] text-[#d1e7f3] flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-lg bg-[#0b2a3d] p-8 rounded-lg shadow-lg mt-10">
        
        {/* Step Indicator */}
        <h1 className="text-2xl font-semibold mb-4 text-center">Ticket Selection</h1>
        <div className="border-b-2 border-[#1a3a4d] mb-4"></div>

        {/* Event Card */}
        <div className="bg-[#0a1a2b] p-6 rounded-lg mb-4 text-center shadow-md">
          <h2 className="text-3xl font-bold mb-2">Techember Fest '25</h2>
          <p className="mb-2">Join us for an unforgettable experience at <span className="font-bold">[Event Name]</span>!</p>
          <p className="flex items-center justify-center mb-2">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>[Event Location] || March 15, 2025 | 7:00 PM</span>
          </p>
        </div>

        {/* Ticket Type Selection */}
        <h3 className="text-lg font-semibold mb-2">Select Ticket Type:</h3>
        <div className="flex space-x-4">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg text-center cursor-pointer transition-all duration-200 shadow-md 
                ${
                  selectedTicket === ticket.type
                    ? "bg-[#1a3a4d] border-2 border-blue-400"
                    : "bg-[#0a1a2b] border border-[#1a3a4d]"
                }`}
              onClick={() => setSelectedTicket(ticket.type)}
            >
              <p className="text-xl font-bold">{ticket.type === "Free" ? "Free" : `$${ticket.price}`}</p>
              <p className="text-sm">{ticket.description}</p>
              <p className="text-sm">{ticket.available}</p>
            </div>
          ))}
        </div>

        {/* Ticket Quantity Selection */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Number of Tickets</h3>
          <select
            value={ticketCount}
            onChange={(e) => setTicketCount(e.target.value)}
            className="w-full p-2 bg-[#0a1a2b] border border-[#1a3a4d] rounded-lg text-white"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className="bg-transparent border-2 border-[#1a3a4d] text-[#1a3a4d] px-4 py-2 rounded-lg hover:bg-[#1a3a4d] hover:text-white transition"
            onClick={() => router.push("/")}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition ${
              selectedTicket
                ? "bg-[#1a3a4d] text-white hover:bg-blue-600"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!selectedTicket}
            onClick={() => selectedTicket && router.push("/details")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

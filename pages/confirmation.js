import { useRouter } from "next/router";

const ConfirmationPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a1a1f] text-[#d1e7e0] font-roboto flex flex-col items-center">
      
      {/* Navbar */}
      <nav className="w-full bg-transparent p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white text-2xl font-bold">ticz</div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white">Events</a>
            <a href="#" className="hover:text-white">My Tickets</a>
            <a href="#" className="hover:text-white">About Project</a>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-gray-400 text-sm">Step 3/3</span>
          <button className="bg-white text-black px-4 py-2 rounded-full">MY TICKETS →</button>
        </div>
      </nav>

      {/* Confirmation Message */}
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold">Your Ticket is Booked!</h2>
        <p className="text-[#a0c4c0] mt-2">
          Check your email for a copy or you can <span className="text-[#00b4b6] cursor-pointer hover:underline">download</span>
        </p>
      </div>

      {/* Ticket Card */}
      <div className="bg-[#0a1a1f] mt-8 p-6 rounded-lg shadow-lg w-full max-w-lg relative border border-[#1a4d52]">
        <div className="bg-[#0d2b2f] p-6 rounded-lg border border-[#00b4b6] relative">
          
          {/* Event Name */}
          <h3 className="text-xl font-bold text-center text-[#d1e7e0] italic">Techember Fest '25</h3>
          
          {/* Location & Date */}
          <div className="text-center text-[#a0c4c0] mt-2">
            <p><i className="fas fa-map-marker-alt"></i> 04 Rumens Road, Ikoyi, Lagos</p>
            <p><i className="fas fa-calendar-alt"></i> March 15, 2025 | 7:00 PM</p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mt-4">
            <img
              src="https://placehold.co/100x100"
              alt="Event"
              className="rounded-lg border-2 border-[#00b4b6]"
              width="100"
              height="100"
            />
          </div>

          {/* Ticket Information */}
          <div className="mt-6 text-[#a0c4c0] text-sm">
            <p><strong>Enter your name:</strong> Avi Chukwu</p>
            <p><strong>Enter your email:</strong> user@email.com</p>
            <p><strong>Ticket Type:</strong> VIP</p>
            <p><strong>Ticket for:</strong> 1</p>
            <p><strong>Special request:</strong> N/A or up to 3 rows of user text</p>
          </div>

          {/* Barcode */}
          <div className="flex justify-center mt-6">
            <img
              src="https://placehold.co/200x50"
              alt="Barcode"
              width="200"
              height="50"
            />
          </div>
          <div className="text-center text-[#a0c4c0] text-sm mt-2">
            <p>234567 891026</p>
          </div>

          {/* Ticket Stub Effect */}
          <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-[#0d2b2f] w-24 h-6 rounded-b-full"></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-6 mt-8">
        <button
          className="bg-transparent border border-[#00b4b6] text-[#00b4b6] py-2 px-6 rounded-lg hover:bg-[#00b4b6] hover:text-[#0a1a1f] transition"
          onClick={() => router.push("/")}
        >
          Book Another Ticket
        </button>
        <button
          className="bg-[#00b4b6] text-[#0a1a1f] py-2 px-6 rounded-lg hover:opacity-80 transition"
          onClick={() => alert("Download Started!")}
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;

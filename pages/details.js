import { useState } from "react";
import { useRouter } from "next/router";
import FileUpload from "../components/FileUpload";
import InputField from "../components/InputField";

const DetailsPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    dietary: "",
    specialRequest: ""
  });
  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState("");

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!profileImage) newErrors.image = "Profile image is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push("/confirmation");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#02191D] text-[#c0c0c0] font-sans">
      {/* Navigation Bar */}
      <nav className="w-full bg-transparent p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white text-2xl font-bold">ticz</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Events</a>
            <a href="#" className="text-gray-400 hover:text-white">My Tickets</a>
            <a href="#" className="text-gray-400 hover:text-white">About Project</a>
          </div>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-full">MY TICKETS →</button>
      </nav>

      {/* Attendee Details Container */}
      <div className="bg-[#0e464f]/50 p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8">
        <h2 className="text-2xl font-semibold mb-4">Attendee Details</h2>

        {/* Step Indicator */}
        <div className="w-full h-1 bg-[#0e464f] mb-4">
          <div className="h-full bg-[#00bcd4]" style={{ width: "66%" }}></div>
        </div>

        {/* Upload Profile Photo */}
        <FileUpload 
          onUpload={(url) => setProfileImage(url)}
          error={errors.image}
        />

        {/* Form Fields */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Enter your name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded bg-[#0e464f]/30 border border-[#0e464f] text-white"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">Enter your email *</label>
            <div className="flex items-center bg-[#0e464f]/30 border border-[#0e464f] rounded p-2">
              <i className="fas fa-envelope text-[#00bcd4] mr-2"></i>
              <input
                type="email"
                id="email"
                value={formData.email}
                className="w-full bg-transparent text-white focus:outline-none"
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="special-request" className="block mb-1">Special request?</label>
            <textarea
              id="special-request"
              className="w-full p-2 rounded bg-[#0e464f]/30 border border-[#0e464f] text-white"
              rows="4"
              value={formData.specialRequest}
              onChange={(e) => handleInputChange("specialRequest", e.target.value)}
            ></textarea>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="bg-transparent border border-[#00bcd4] text-[#00bcd4] px-4 py-2 rounded hover:bg-[#0e464f]/50"
              onClick={() => router.push("/")}
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-[#00bcd4] text-[#0e464f] px-4 py-2 rounded hover:bg-[#00bcd4]/90"
              onClick={handleSubmit}
            >
              Get My Free Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsPage;

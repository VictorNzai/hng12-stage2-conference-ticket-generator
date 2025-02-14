import Navbar from "../components/Navbar";
import Button from "../components/Button";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Event Ticket Booking UI - Open Source Practice Project 🎟️</h1>

                <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600">
                    <h2 className="text-xl font-bold mb-4">Overview</h2>
                    <p className="text-gray-300 text-sm">
                        This is a software-friendly and practical Event Ticket Booking UI designed for developers to clone, tweak, and build upon.
                        It helps create ticket booking experiences, digitise ticket transactions, and allow smooth ticket monitoring, security, and authenticity.
                    </p>

                    <h2 className="text-xl font-bold mt-6 mb-2">Flow & Features</h2>

                    <h3 className="text-lg font-semibold mt-4">1️⃣ Clear Selection</h3>
                    <ul className="text-gray-400 text-sm list-disc pl-6">
                        <li>Users can choose available tickets (Free & Paid).</li>
                        <li>Ticket selection is displayed in a clear interface.</li>
                        <li>Fixed-Priced Tickets - Choosing "Purchase Ticket" would bring up a payment model.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">2️⃣ Extended Details Form</h3>
                    <ul className="text-gray-400 text-sm list-disc pl-6">
                        <li>User provides name, email, and optional phone number.</li>
                        <li>Ticket summary enables users to review event details before submission.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">3️⃣ Payment or Secure Pass</h3>
                    <ul className="text-gray-400 text-sm list-disc pl-6">
                        <li>If the ticket is free, the user moves straight to the Ticket Confirmation Page.</li>
                        <li>If paid, they would choose between Stripe, PayPal, or Flutterwave to process the transaction.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">4️⃣ Download or Store the Ticket</h3>
                    <ul className="text-gray-400 text-sm list-disc pl-6">
                        <li>Users can download the ticket in PDF format.</li>
                        <li>Tickets could be stored on the user’s device.</li>
                        <li>Admin-side dashboard for managing ticket sales.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6 mb-2">Tech Stack</h2>
                    <ul className="text-gray-400 text-sm list-disc pl-6">
                        <li>Frontend: Next.js + React</li>
                        <li>Tailwind CSS for styling</li>
                        <li>State management with Context API</li>
                        <li>File Upload: Firebase or Cloudinary</li>
                        <li>Payment Integration (Stripe, PayPal, Flutterwave)</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6 mb-2">Future Improvements</h2>
                    <ul className="text-gray-400 text-sm list-disc pl-6">
                        <li>Dynamic ticket booking, admin dashboard.</li>
                        <li>Real-time updates on ticket availability.</li>
                        <li>QR code scanning for event check-in.</li>
                    </ul>

                    <div className="text-center mt-6">
                        <p className="text-3xl">💛 Enjoy</p>
                    </div>
                </div>

                <div className="mt-6 flex justify-center space-x-4">
                    <Button label="Design File" type="secondary" onClick={() => alert("Redirect to Design File")} />
                    <Button label="GitHub Code" type="primary" onClick={() => alert("Redirect to GitHub Repo")} />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

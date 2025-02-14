import QRCode from 'qrcode.react';

const TicketCard = ({ name, email, ticketType, ticketCount, specialRequest, event }) => {
  return (
    <div className="w-80 bg-gray-800 text-white p-6 rounded-lg shadow-lg border border-gray-600">
      <h2 className="text-xl font-bold">{event.title}</h2>
      <p className="text-sm text-gray-400">{event.location} | {event.date}</p>
      <div className="flex justify-center py-4">
        <img src="/avatar-placeholder.png" alt="User" className="h-24 w-24 rounded-full object-cover" />
      </div>
      <div className="text-sm">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Ticket Type:</strong> {ticketType}</p>
        <p><strong>Tickets for:</strong> {ticketCount}</p>
        {specialRequest && <p><strong>Special Request:</strong> {specialRequest}</p>}
      </div>
      <div className="flex justify-center mt-4">
        <img src="/barcode-placeholder.png" alt="Barcode" className="h-12" />
      </div>
    </div>
  );
};

export default TicketCard;
export default function ContactInfo({ contactInfo }) {
  return (
    <div className="bg-gray-700 py-8 text-white">
      <h1 className="mb-4 text-center text-3xl font-semibold">{contactInfo.name}</h1>
      <div className="flex justify-center gap-4 font-medium">
        <p>{contactInfo.email}</p>
        <p>{contactInfo.phone}</p>
        <p>{contactInfo.address}</p>        
      </div>
    </div>
  );
}

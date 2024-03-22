export default function EditContactInfo(props) {
  const { name, email, phone, address } = props.contactInfo;
  return (
    <form className="mb-4 rounded-lg bg-white px-6 py-4">
      <div className="mb-4">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Personal Details
        </h2>
        <label
          className="mb-2 block text-sm font-bold text-gray-900"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <input
          className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
          id="fullName"
          name="name"
          type="text"
          placeholder="First and last name"
          onChange={props.onChangeContactInfo}
          value={name}
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-900"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={props.onChangeContactInfo}
          value={email}
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-900"
          htmlFor="phoneNumber"
        >
          Phone Number
        </label>
        <input
          className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
          id="phoneNumber"
          type="text"
          name="phone"
          placeholder="Enter phone number"
          onChange={props.onChangeContactInfo}
          value={phone}
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-900"
          htmlFor="address"
        >
          Address
        </label>
        <input
          className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
          id="address"
          type="text"
          name="address"
          placeholder="City, Country"
          onChange={props.onChangeContactInfo}
          value={address}
        />
      </div>
    </form>
  );
}

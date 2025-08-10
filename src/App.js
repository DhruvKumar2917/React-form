import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6 border"
      >
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block font-semibold mb-1">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Love"
            value={formData.firstName}
            onChange={changeHandler}
            className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block font-semibold mb-1">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Babbar"
            value={formData.lastName}
            onChange={changeHandler}
            className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="love@abcd.com"
            value={formData.email}
            onChange={changeHandler}
            className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block font-semibold mb-1">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        {/* Address Fields */}
        <div>
          <label htmlFor="streetAddress" className="block font-semibold mb-1">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="B-25C"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="city" className="block font-semibold mb-1">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Patna"
              value={formData.city}
              onChange={changeHandler}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label htmlFor="state" className="block font-semibold mb-1">State / Province</label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Bihar"
              value={formData.state}
              onChange={changeHandler}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block font-semibold mb-1">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="110077"
              value={formData.postalCode}
              onChange={changeHandler}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>


        <fieldset className="border rounded p-4">
          <legend className="font-bold">By Email</legend>

          <div className="flex items-start space-x-3 mt-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="mt-1"
            />
            <div>
              <label htmlFor="comments" className="font-semibold">Comments</label>
              <p className="text-sm text-gray-500">Get notified when someone posts a comment.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 mt-2">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mt-1"
            />
            <div>
              <label htmlFor="candidates" className="font-semibold">Candidates</label>
              <p className="text-sm text-gray-500">Get notified when a candidate applies.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 mt-2">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="mt-1"
            />
            <div>
              <label htmlFor="offers" className="font-semibold">Offers</label>
              <p className="text-sm text-gray-500">Get notified when a candidate accepts/rejects.</p>
            </div>
          </div>
        </fieldset>

        
        <fieldset className="border rounded p-4">
          <legend className="font-bold">Push Notifications</legend>
          <p className="text-sm text-gray-500 mb-3">Delivered via SMS to your mobile phone.</p>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
              />
              <span>Everything</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                id="pushEmail"
                name="pushNotifications"
                value="Same as email"
                onChange={changeHandler}
              />
              <span>Same as email</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                id="pushNothing"
                name="pushNotifications"
                value="No Push Notifications"
                onChange={changeHandler}
              />
              <span>No Push Notifications</span>
            </label>
          </div>
        </fieldset>


        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded py-2 px-6 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;

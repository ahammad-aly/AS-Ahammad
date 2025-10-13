import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ContactText from "./ContactText";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".rForm", { x: 400, duration: 0.8 });
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const d = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/email/contact`,
        data
      );
      if (d.status === 200) {
        toast.success(d.data.msg, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        setData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      if (error.response.data.stat === 400) {
        toast.error(error.response.data.msgerr, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    }
  }

  return (
    <div className="flex items-center overflow-hidden backdrop-blur-sm bg-white/30 rounded-2xl max-w-5xl mx-auto max-md:flex-col ">
      <ContactText />

      <form
        className="rForm h-9/10 w-1/2 p-4 max-md:h-auto max-md:w-auto mt-8 space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-6xl font-bold text-color">Contact</h2>
        <input
          type="text"
          value={data.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          value={data.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Message"
          value={data.message}
          onChange={handleChange}
          name="message"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="text-white rounded hover:bg-blue-600 hover:shadow-lg max-md:hover:shadow-lg shadow-[#2e2f44] px-4 py-2 bg-[#2e2f44]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

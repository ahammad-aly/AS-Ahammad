import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
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
        `${import.meta.env.VITE_API_URL}/api/email`,
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
    <>
      <div className="txte w-screen h-[70vh] flex items-center mt-4 overflow-x-hidden">
        <h1 className="txt text-[10vw] font-extrabold ">
          Do_You_Want_To_Create_A_Project_?
        </h1>
      </div>
      <div className="svg text-color flex flex-col justify-center items-center backdrop-blur-sm mix-blend-color-burn">
        <form
          onSubmit={handleSubmit}
          className="form flex flex-col justify-center items-center h-9/10 p-4 max-md:h-auto w-3xl mt-8 space-y-4 max-md:w-screen"
        >
          <h2 className="con text-6xl font-bold">Contact Me</h2>
          <input
            name="name"
            onChange={handleChange}
            value={data.name}
            type="text"
            placeholder="Name"
            className="con w-full p-2 border border-x-transparent border-t-transparent rounded"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Email"
            className="con w-full p-2 border border-x-transparent border-t-transparent rounded"
          />
          <textarea
            name="message"
            onChange={handleChange}
            value={data.message}
            placeholder="Message"
            className="con w-full p-2 border border-x-transparent border-t-transparent rounded"
          />
          <button
            type="submit"
            className="con bg-[#2e2f44] text-white rounded hover:bg-blue-600 hover:shadow-lg max-md:hover:shadow-lg  px-4 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

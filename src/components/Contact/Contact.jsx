import { useTypewriter } from "react-simple-typewriter";
import { useState } from "react";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [form, setForm] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
    errMsg: "",
    successMsg: "",
  });

  const handleSend = (e) => {
    e.preventDefault();
    const { username, phoneNumber, email, subject, message } = form;

    if (!username || !phoneNumber || !email || !subject || !message) {
      setForm({ ...form, errMsg: "All fields are required!" });
    } else if (
      !email.toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setForm({ ...form, errMsg: "Give a valid Email!" });
    } else {
      setForm({
        username: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
        errMsg: "",
        successMsg: `Thank you dear ${username}, Your Messages has been sent Successfully!`,
      });
    }
  };
  const [text] = useTypewriter({
    words: ["Contact "],
    loop: true,
    typeSpeed: 1000,
    deleteSpeed: 10,
  });
  return (
    <section
      id="contact"
      className="2xl:container 2xl:mx-auto lg:py-8 lg:px-5 md:px-3 py-5 px-1"
    >
      <div className=" mb-5 flex justify-center items-center text-center">
        <h1 className="text-[#3adbff] text-3xl lg:text-4xl font-bold leading-9 pb-4 place-items-center">
          {text}
        </h1>
      </div>
      <div className="flex justify-center items-center text-center">
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form
                className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
                onSubmit={handleSend}
              >
                {form.errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {form.errMsg}
                  </p>
                )}
                {form.successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {form.successMsg}
                  </p>
                )}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Your name
                    </p>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
                      value={form.username}
                      className={`${
                        form.errMsg === "Username is required!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Phone Number
                    </p>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, phoneNumber: e.target.value })
                      }
                      value={form.phoneNumber}
                      className={`${
                        form.errMsg === "Phone number is required!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    value={form.email}
                    className={`${
                      form.errMsg === "Please give your Email!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Subject
                  </p>
                  <input
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    value={form.subject}
                    className={`${
                      form.errMsg === "Plese give your Subject!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    value={form.message}
                    className={`${
                      form.errMsg === "Message is required!" &&
                      "outline-designColor"
                    } contactTextArea`}
                    cols="30"
                    rows="8"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white rounded"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState, useEffect } from "react";

const Homepage = () => {
  const [text, setText] = useState(""); // Menyimpan teks saat ini
  const [isDeleting, setIsDeleting] = useState(false); // Status mengetik atau menghapus
  const [index, setIndex] = useState(0); // Melacak karakter saat ini
  const fullText = "I am a Web Developer"; // Teks lengkap yang akan diketik
  const typingSpeed = isDeleting ? 50 : 100; // Kecepatan mengetik/hapus
  const pauseTime = 1000; // Waktu jeda sebelum menghapus

  useEffect(() => {
    const type = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Tambah karakter
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText(fullText.slice(0, index - 1)); // Hapus karakter
        setIndex(index - 1);
      } else if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime); // Tunggu sebelum menghapus
      } else if (isDeleting && index === 0) {
        setIsDeleting(false); // Reset mengetik
      }
    }, typingSpeed);

    return () => clearTimeout(type); // Bersihkan timeout saat komponen di-unmount
  }, [index, isDeleting, typingSpeed]);

  const formInitialDetails = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formDetails);
    setButtonText("Sending...");
    // Simulate sending process
    setTimeout(() => {
      setButtonText("Send Message");
      alert("Sorry, this feature is still not developed");
    }, 2000);
  };

  return (
    <div className="homepage pb-10 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="hero items-center justify-start gap-16 pt-28 w-full md:pb-14 pb-28">
          <div className="box text-left m-8 md:m-32">
            <h1 className="lg:text-5xl/tight text-4xl font-medium mb-3">
              Hi there👋, I&apos;m{" "}
              <span className="text-sky-500 font-semibold">Amelia</span>
            </h1>
            {/* Tambahkan efek mengetik pada elemen ini */}
            <h2 className="lg:text-3xl/tight text-2xl font-medium mb-7">
              {text}
              <span className="blinking-cursor text-sky-400">|</span>
            </h2>
            <p className="text-base/8 mb-7">
              Someone who is diving into the world of programming, a huge field
              with no limits and always growing. You can learn more about me
              here, and I&apos;m really happy you&apos;re checking out my
              website!
            </p>
            <a
              href="#about"
              className="bg-sky-400 hover:bg-sky-600 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              About me <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">{/* Tambahkan gambar jika diperlukan */}</div>
        </div>

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:pt-14 pt-28 bg-[#1f314d] w-screen relative left-1/2 -translate-x-1/2 px-11 lg:px-20 md:pb-14 pb-28" id="about">
          <div className="box">
            {/* <img src="./mee.jpg" alt="About Image"/> */}
            <img
              // className="lg:w-[500px] w-[400px] rounded-full border-2 border-black shadow-xl hover:shadow-slate-600 transition-all"
              className="rounded-full border-1 border-black shadow-xl hover:shadow-[#8a8372] transition-all w-[300px] lg:w-[400px] mx-auto"
              src="./mee.jpg"
              alt="About Image"
            />
          </div>
          <div className="box text-[#e5e7eb]">
            <h1 className="lg:text-5xl/tight text-4xl font-medium mb-3">
              About <span className="text-[#f5e2b8] font-semibold">me</span>
            </h1>
            <p className="text-base/8 mb-7 text-justify">
              Hello!! My name is{" "}
              <span className="text-[#f5e2b8] font-semibold">
                Dwi Lestari Amelia
              </span>
              , but you can call me Amelia. I&apos;m someone who&apos;s always
              curious, diving deep into the vast world of programming. I
              constantly find myself wondering how things work and, more often
              than not, asking why certain things break down. Each bug and issue
              is an opportunity to learn and improve, and I approach every
              challenge with a sense of wonder and determination. I love diving
              into new problems, figuring out how systems are built, and
              troubleshooting them until everything works seamlessly. Whether
              it&apos;s debugging a complex issue or learning a new technology,
              my passion lies in understanding the process and finding effective
              solutions.
            </p>
            <p className="text-base/8 mb-7 text-justify">
              Right now, I&apos;m especially focused on web development, as I
              dive deeper into this exciting field. There&apos;s no end to the
              possibilities, and that excites me as I continue to grow and
              develop as a programmer.
            </p>
          </div>
        </div>

        <div className="projects" id="projects">
          <h1 className="lg:text-5xl/tight text-4xl font-medium mb-11 text-center gap-10 md:pt-28 pt-28">
            Projects
          </h1>
          <div className="flex justify-center">
            <div className="card glass w-96 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative z-0">
              <figure className="overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="./linktree.png"
                  alt="Projects Image"
                />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-2xl font-bold mb-2">
                  Linktree Project
                </h2>
                <p className="text-gray-700">Manage your links with ease!</p>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://linktree-dwi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="btn btn-primary transition-transform transform hover:scale-110"
                    className="bg-sky-400 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:bg-sky-500"

                  >
                    Visit Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 bg-[#1f314d] text-white py-20 w-screen relative left-1/2 -translate-x-1/2" id="contact">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="lg:text-5xl/tight text-4xl font-medium text-center mb-10">
              Contact <span className="text-[#f5e2b8]">Me</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formDetails.fullName}
                  onChange={(e) => onFormUpdate("fullName", e.target.value)}
                  className="bg-[#1f314d] border border-[#f5e2b8] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5e2b8]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formDetails.email}
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  className="bg-[#1f314d] border border-[#f5e2b8] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5e2b8]"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={formDetails.phone}
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                  className="bg-[#1f314d] border border-[#f5e2b8] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5e2b8]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formDetails.subject}
                  onChange={(e) => onFormUpdate("subject", e.target.value)}
                  className="bg-[#1f314d] border border-[#f5e2b8] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5e2b8]"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="5"
                value={formDetails.message}
                onChange={(e) => onFormUpdate("message", e.target.value)}
                className="bg-[#1f314d] border border-[#f5e2b8] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5e2b8] w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-[#f5e2b8] hover:bg-[#fac553] text-[#1f314d] px-6 py-3 rounded-lg font-bold transition duration-300"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </div>

    
  );
};

export default Homepage;

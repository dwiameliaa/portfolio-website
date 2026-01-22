import { useState, useEffect } from "react";

const projects = [
  {
    title: "Linktree Project",
    desc: "Manage your links with ease!",
    img: "./linktree.png",
    link: "https://linktree-dwi.vercel.app/",
  },
  {
    title: "GennieUS",
    desc: "An Android-based educational application featuring interactive games",
    img: "./gennieus.jpeg",
    link: "https://github.com/dwiameliaa/GennieUS",
  },
  {
    title: "YummyBook",
    desc: "A digital recipe book application",
    img: "./yummy.jpeg",
    link: "https://github.com/dwiameliaa/YummyBook",
  },
  {
    title: "BookStore",
    desc: "A website for browsing and purchasing books online",
    img: "./bookstore.png",
    link: "https://github.com/dwiameliaa/booksales-fe",
  },
  {
    title: "Karakteristik Antena",
    desc: "A website for antenna parameter calculation and visualization",
    img: "./antena.png",
    link: "https://github.com/dwiameliaa/KarAnt",
  },
  {
    title: "Website Pre-Order Pakaian",
    desc: "A web application for managing clothing pre-orders and product sales, featuring user and admin dashboards",
    img: "./preorder.png",
    link: "https://github.com/dwiameliaa/Website-PreOrder-Fashion-FE",
  },
];

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

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    if (startIndex + visibleCards < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="pb-10 overflow-x-hidden homepage">
      <div className="container px-4 mx-auto">
        <div className="items-center justify-start w-full gap-16 hero pt-28 md:pb-14 pb-28">
          <div className="m-8 text-left box md:m-32">
            <h1 className="mb-3 text-4xl font-medium lg:text-5xl/tight">
              Hi there👋, I&apos;m{" "}
              <span className="font-semibold text-sky-500">Amelia</span>
            </h1>
            {/* Tambahkan efek mengetik pada elemen ini */}
            <h2 className="text-2xl font-medium lg:text-3xl/tight mb-7">
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
              className="px-4 py-2 text-white transition-all rounded-full shadow bg-sky-400 hover:bg-sky-600"
            >
              About me <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
        </div>

        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:pt-14 pt-28 bg-[#1f314d] w-screen relative left-1/2 -translate-x-1/2 px-11 lg:px-20 md:pb-14 pb-28"
          id="about"
        >
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
            <h1 className="mb-3 text-4xl font-medium lg:text-5xl/tight">
              About <span className="text-[#f5e2b8] font-semibold">me</span>
            </h1>
            <p className="text-justify text-base/8 mb-7">
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
            <p className="text-justify text-base/8 mb-7">
              Right now, I&apos;m especially focused on web development, as I
              dive deeper into this exciting field. There&apos;s no end to the
              possibilities, and that excites me as I continue to grow and
              develop as a programmer.
            </p>
          </div>
        </div>

        <div className="projects" id="projects">
          <h1 className="mb-12 text-4xl font-medium text-center lg:text-5xl pt-28">
            Projects
          </h1>

          {/* Wrapper */}
          <div className="relative px-6 mx-auto max-w-7xl">
            {/* Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {projects
                .slice(startIndex, startIndex + visibleCards)
                .map((project, index) => (
                  <div
                    key={index}
                    className="card glass rounded-xl shadow-md 
                           transition-all duration-300 ease-out 
                           hover:scale-[1.02] hover:shadow-xl"
                  >
                    <figure className="overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                      />
                    </figure>

                    <div className="p-5 card-body">
                      <h2 className="text-xl font-bold card-title">
                        {project.title}
                      </h2>
                      <p className="text-gray-700">{project.desc}</p>

                      <div className="justify-end mt-4 card-actions">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-white transition-all duration-300 rounded-lg bg-sky-400 hover:bg-sky-500 hover:scale-105"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={prevSlide}
                disabled={startIndex === 0}
                className="btn btn-outline hover:bg-[#1f314d] disabled:opacity-40"
              >
                ◀ Prev
              </button>

              <button
                onClick={nextSlide}
                disabled={startIndex + visibleCards >= projects.length}
                className="btn btn-outline hover:bg-[#1f314d] disabled:opacity-40"
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-40 bg-[#1f314d] text-white py-20 w-screen relative left-1/2 -translate-x-1/2"
          id="contact"
        >
          <div className="max-w-5xl px-4 mx-auto">
            <h2 className="mb-10 text-4xl font-medium text-center lg:text-5xl/tight">
              Contact <span className="text-[#f5e2b8]">Me</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

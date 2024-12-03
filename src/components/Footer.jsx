const Footer = () => {
  return (
    <footer className="footer footer-center text-base-content rounded p-10 pt-4" id="social">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/douiliame" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-fill text-3xl"></i>
          </a>
          <a href="https://github.com/dwiameliaa" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill text-3xl"></i>
          </a>
          <a href="https://discord.com/users/leovahwa" target="_blank" rel="noopener noreferrer">
            <i className="ri-discord-fill text-3xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/dwi-lestari-amelia " target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-fill text-3xl"></i>
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-bold">Dwi Lestari Amelia</span></p>
      </aside>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="mt-10 border-t bg-white py-6">
      <div className="wrapper flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <p className="font-medium" style={{ color: "#FA7275" }}>
          © {new Date().getFullYear()} StoreIt — All rights reserved || HARSH
          SINGH
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/HarshSSingh267"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-singh-267s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:harshssingh267@gmail.com"
            className="text-black transition hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

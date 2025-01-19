import { FaDiscord, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.gg/UeE6bzzF", icon: <FaDiscord /> },
  { href: "https://x.com/AryaAmour08", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/@valorant", icon: <FaYoutube /> },
  { href: "https://www.linkedin.com/in/arya-amour/", icon: <FaLinkedin /> },
  { href: "https://github.com/EpicAryan", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-red-secondary py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-base font-medium md:text-left">
          ©{new Date().getFullYear()} Amour. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start ">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-base font-medium hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;

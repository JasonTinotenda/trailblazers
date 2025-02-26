import { Link } from "react-router-dom";
import { FaWhatsapp, FaGlobe, FaYoutube, FaFacebook } from "react-icons/fa";
import logo from "../assets/PAOZLOGO.png";

const Footer = () => {
  const footerLinks = [
    {
        title: "Quick Links",
        links: [
          { name: "About Us", href: "#" },
          { name: "Ministries", href: "#" },
          { name: "Contact Us", href: "#" },
        ],
      },
    {
      title: "Resources",
      links: [
        { name: "Campus Outreach", href: "#" },
        { name: "Bible Study", href: "#" },
        { name: "Sermons", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Facebook", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "Whatsapp", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { href: "#", icon: <FaWhatsapp />, label: "Whatsapp" },
    { href: "#", icon: <FaFacebook />, label: "Facebook" },
    { href: "#", icon: <FaGlobe />, label: "#" },
    { href: "#", icon: <FaYoutube />, label: "Youtube" },    
  ];

  return (
    <footer className="bg-orange-50 shadow-sm border-t border-gray-200 pb-4">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <Link href="#" className="flex items-center space-x-2">
            <img src={logo} className="h-8 w-auto" alt="Trailblazers Logo" />
            <span className="text-lg font-semibold text-gray-800">
              Trailblazers
            </span>
          </Link>
        </div>

        <div className="md:col-span-2 flex justify-end">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                  {section.title}
                </h2>
                <ul className="text-gray-600">
                  {section.links.map((link) => (
                    <li key={link.name} className="mb-2">
                      <Link href={link.href} className="hover:text-orange-600 transition-colors duration-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-500">
          © 2025 Trailblazers. All Rights Reserved.
        </span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialIcons.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              className="text-gray-500 hover:text-orange-600 transition-colors duration-300"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

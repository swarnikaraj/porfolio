import React from "react";
import Image from "next/image";
const ContactSection = () => {
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg mb-8">
              Feel free to reach out to me for any inquiries or collaboration
              opportunities.
            </p>
            <div>
              <p className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 mr-2 fill-current text-[#FC6736]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M19 4.41l-9 9L3.41 10 1 12.41 10 21l9-9V4.41zM11 1H9L8 0H6l-1 1H1v2l1 .33L7 20h2l6-17.67L17 3V1h-6v2H9l-1 1v2h5v2H6.59l-1.29 1.29V11h2V9H4V7h9V5H8V3h3V1z" />
                </svg>
                Email: swarnikarajsingh@gmail.com
              </p>
              <p className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 mr-2 fill-current text-[#FC6736]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16 0H4C1.8 0 0 1.8 0 4v12c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM9 15H7v-2h2v2zm0-4H7V9h2v2zm0-4H7V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2z" />
                </svg>
                Phone: +91 7643871359
              </p>
              <p className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 fill-current text-[#FC6736]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0C4.48 0 0 4.48 0 10c0 3.4 1.67 6.38 4.22 8.22L2 20l5.78-2.22C8.4 18.67 9.3 19 10 19s1.6-.33 2.22-.78L18 20l-2.22-1.78C18.33 16.38 20 13.4 20 10c0-5.52-4.48-10-10-10zm4.45 13.55C13.73 14.79 11.91 15 10 15s-3.73-.21-4.45-.45C4.11 13.81 4 13.41 4 13c0-.28.11-.59.55-.95C5.3 10.85 6.63 10 10 10s4.7.85 5.45 2.05c.44.36.55.67.55.95 0 .41-.11.81-.55 1.05zm1.24-3.67c-.19-.17-.42-.29-.7-.38-.54-.19-1.19-.3-1.99-.3s-1.45.11-1.99.3c-.28.09-.51.21-.7.38-.27.24-.49.57-.64.97-.15.39-.22.88-.22 1.45 0 .57.07 1.06.22 1.45.15.39.37.72.64.97.19.17.42.29.7.38.54.19 1.19.3 1.99.3s1.45-.11 1.99-.3c.28-.09.51-.21.7-.38.27-.24.49-.57.64-.97.15-.39.22-.88.22-1.45 0-.57-.07-1.06-.22-1.45-.15-.39-.37-.72-.64-.97zM10 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
                Location: Planet, Earth
              </p>
            </div>
          </div>
          <div className="text-center md:text-right"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

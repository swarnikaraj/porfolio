const Footer = () => {
  return (
    <div className="py-4 border-t border-gray-600 text-sm text-gray-500  z-20  ">
      <div className="flex items-center justify-center">
        © Copyright {new Date().getFullYear()} - Developed by Swarnnika Raj
        Singh. All right reserved
      </div>
    </div>
  );
};

export default Footer;

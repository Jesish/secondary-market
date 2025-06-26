const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <p>&copy; 2025 ThriftTreasure. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

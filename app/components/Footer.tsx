import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-8 font-Barlow_Condensed bg-black">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0">
            <h3 className="text-xl font-semibold">SaiGonCornerBarber.</h3>
            <p className="mt-2">A brief description of the company</p>
        </div>
        <div className="mb-4 lg:mb-0 lg:ml-12">
            <h4 className="text-lg font-semibold mb-2">Địa chỉ</h4>
            <ul>
                <li>
                    <a href="#" className="block hover:text-gray-400">
                        327 Tân Sơn Nhì, Tân Sơn Nhì, Tân Phú, TP.HCM.
                    </a>
                </li>
                <li>
                    <a href="#" className="block hover:text-gray-400">
                        800 Xô Viết Nghệ Tĩnh, P25, Bình Thạnh, TP.HCM.
                    </a>
                </li>
            </ul>
            <h4 className="text-lg font-semibold mb-2 mt-4">Website</h4>
            <a href="#" className="block hover:text-gray-400">
                saigoncornerbarber.com.vn
            </a>
            <h4 className="text-lg font-semibold mb-2 mt-4">Email</h4>
            <a href="#" className="block hover:text-gray-400">
                saigoncorner@gmail.com
            </a>
        </div>
        <div>
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <ul>
                <li>
                    <a href="#" className="block hover:text-gray-400">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="#" className="block hover:text-gray-400">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="#" className="block hover:text-gray-400">
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="#" className="block hover:text-gray-400">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p>&copy; 2024 TuanNguyen. All rights reserved.</p>
    </div>
</footer>

  );
};

export default Footer;

"use client";
import ContactForm from "./components/contactForm";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="h-[3000px]">
      <div className="content-wrapper font-Barlow_Condensed text-base mx-auto">
        <header className="p-6 mx-auto bg-[rgba(0,0,0,0.6)] fixed top-0 left-0 right-0 z-50">
          <nav className="flex-custom relative">
            <div className="logo basis-2/6 text-center text-white text-xl font-semibold cursor-pointer">
              SaiGonCornerBarber.
            </div>
            <ul
              id="tqd-top-menu"
              className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-white font-medium"
            >
              <li className="tqd-top-menu-item ">
                <a className="" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="tqd-top-menu-item">
                <a className="" href="#">
                  Dịch vụ
                </a>
              </li>
              <li className="tqd-top-menu-item">
                <a className="" href="#">
                  Đặt lịch
                </a>
              </li>
              <li className="tqd-top-menu-item">
                <a className="" href="#">
                  Liên hệ
                </a>
              </li>
              <li className="tqd-top-menu-item">
                <a className="" href="#">
                  Style Guide
                </a>
              </li>
              <li className="tqd-top-menu-item tqd-top-menu-item-active">
                <a className="" href="#">
                  Tuan Nguyen
                </a>
              </li>
            </ul>
            <ul className="basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
              <li className="tqd-top-menu-item">
                <a href="#" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="tqd-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span className="mx-2">Cart</span>
                  <span className="tqd-badge-circle bg-orange-400 text-white">
                    9
                  </span>
                </a>
              </li>
            </ul>
            <div className="basis-1/6 lg:hidden items-center cursor-pointer px-2 sm:px-8">
              <svg
                id="tqd-toggle-top-menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="tqd-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </nav>
        </header>
        <main>
          <div className="slider h-screen bg-barber1 bg-cover bg-no-repeat bg-center bg-fixed">
            <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-60">
              <div className="mx-16 text-white text-center">
                <div className="uppercase mb-6">
                  The Ultimate Destination htmlFor Grooming
                </div>
                <div className="font-Inspiration text-7xl mb-6">
                  Sài Gòn Corner Barber Shop
                </div>
                <div className="font-medium text-lg mb-8">
                  Nâng tầm phong cách của bạn. Trải nghiệm sự khác biệt với các
                  dịch vụ làm đẹp cao cấp tại tiệm cắt tóc của chúng tôi.
                </div>
                <div className="flex justify-center">
                  <div className="uppercase bg-white text-gray-900 w-max tracking-wider py-4 px-7 text-sm font-semibold cursor-pointer hover:bg-opacity-75">
                    Đặt lịch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="services-content bg-services-color w-full h-[450px] text-black">
          <div className="p-services-content py-16 px-28 min-h-full">
            <div className="services-title text-center flex justify-center ">
              <h1 className="text-6xl font-semibold leading-none border-r-4 border-black pr-4">
                Our Services
              </h1>
              <p className="pl-4 text-3xl">Dịch vụ</p>
            </div>
            <div className="flex-custom mt-16 gap-24">
              <div className="wrap-services-content-detail">
                <div className="flex-icon-content">
                  <div className="bg-icon1 bg-no-repeat bg-contain h-16 w-16"></div>
                </div>
                <div className="mt-8">
                  <h1 className="services-content-title">CẮT TÓC</h1>
                  <p>Cắt tóc chuyên nghiệp chỉ với 120.000 VND</p>
                </div>
              </div>
              <div className="wrap-services-content-detail">
                <div className="flex-icon-content">
                  <div className="bg-icon2 bg-no-repeat bg-contain h-16 w-16"></div>
                </div>
                <div className="mt-8">
                  <h1 className="services-content-title">CẠO RÂU</h1>
                  <p>Chăm sóc và cạo râu với giá 50.000 VND</p>
                </div>
              </div>
              <div className="wrap-services-content-detail">
                <div className="flex-icon-content">
                  <div className="bg-icon3 bg-no-repeat bg-contain h-16 w-16"></div>
                </div>
                <div className="mt-8">
                  <h1 className="services-content-title">CẠO MẶT</h1>
                  <p>Cạo mặt sạch sẽ, láng mịn 20.000 VND</p>
                </div>
              </div>
              <div className="wrap-services-content-detail">
                <div className="flex-icon-content">
                  <div className="bg-icon4 bg-no-repeat bg-contain h-16 w-16"></div>
                </div>
                <div className="mt-8">
                  <h1 className="services-content-title">TẠO KIỂU TÓC</h1>
                  <p>Tạo kiểu tóc ấn tượng với giá 30.000 VND</p>
                </div>
              </div>
              <div className="wrap-services-content-detail">
                <div className="flex-icon-content">
                  <div className="bg-icon5 bg-no-repeat bg-contain h-16 w-16"></div>
                </div>
                <div className="mt-8">
                  <h1 className="services-content-title">NHUỘM MÀU</h1>
                  <p>Nhuộm màu thời trang chỉ với 500.000 - 750.000 VND</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0f0a05] w-full">
          <div className="py-20 relative w-full bg-barber2 bg-no-repeat bg-right-top h-[620px] bg-fixed">
            <div className="container mx-auto w-4/5 h-auto">
              <div className="wrap-content w-1/2 py-20">
                <div className="text-white text-7xl pb-10 font-bold">
                  Chúng tôi là
                </div>
                <div className="text-white text-base">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-[620px] bg-barber3 bg-fixed p-12 bg-cover bg-no-repeat">
            <div className="text-white font-bold text-7xl text-center mb-12">
              Combo Corner
            </div>
            <div className="flex gap-6">
              <div className="combo-box">
                <h1 className="services-content-title">Basic Haircut Combo</h1>
                <p className="font-bold text-xl">GIÁ CẮT : 120K</p>
                <p>(XẢ - CẮT - TẠO KIỂU)</p>
                <h3 className="mt-4 text-2xl">
                  COMBO 2 NGƯỜI: 110K/NGƯỜI <br /> COMBO 4 NGƯỜI: 100K/NGƯỜI
                </h3>
              </div>
              <div className="combo-box">
                <h1 className="services-content-title">Cut & Perm Combo</h1>
                <p className="font-bold text-xl">GIÁ UỐN : 300KK</p>
                <p>COMBO CẮT UỐN: 410K</p>
                <h3 className="mt-4 text-2xl">
                  COMBO 2 NGƯỜI: 380K/NGƯỜI <br /> COMBO 4 NGƯỜI: 340K/NGƯỜI
                </h3>
              </div>
              <div className="combo-box">
                <h1 className="services-content-title">Dye & Balayage Combo</h1>
                <p className="font-bold text-xl">GIÁ NHUỘM : 500K - 750K</p>
                <p>(TẨY TÓC: 250K - 350K/ LẦN)</p>
                <h3 className="mt-4 text-2xl">
                  COMBO 2 NGƯỜI: 300K/NGƯỜI <br /> COMBO 4 NGƯỜI: 250K/NGƯỜI
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-contact-color flex justify-center p-12 text-black">
          <div className="basis-1/2 p-20">
            <div className="h-full bg-barber4 bg-no-repeat bg-cover bg-center border-4 border-solid border-black"></div>
          </div>
          <div className="basis-1/2 ">
            <div className="font-bold text-5xl text-center m-6">
              Liên hệ chúng tôi
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

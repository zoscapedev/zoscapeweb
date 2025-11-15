import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-3xl font-bold text-rose-500">
              🏡 StayEase
            </div>
          </Link>

          {/* Contact Details */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-sm font-semibold text-gray-700">Contact Us</span>
              <span className="text-sm text-gray-600">+91 98765 43210</span>
              <span className="text-xs text-gray-500">contact@stayease.com</span>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 font-medium text-sm">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

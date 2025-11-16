import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  roomName?: string;
}

export default function Header({ roomName }: HeaderProps) {
  const whatsappUrl = 'https://wa.me/918459074850';
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#1295ff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center flex-1">
            <div className="text-3xl font-bold">
              <Image src="/zoscape.png" alt="StayEase Logo" width={120} height={120} />
            </div>
          </Link>

          {/* Contact Details */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col text-right gap-1">
              <span className="text-sm font-semibold text-black">Contact Us</span>
              <div className="flex items-center gap-2 justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-black">+91 8459074850</a>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-xs text-black">bookzoscape@gmail.com</span>
              </div>
            </div>
            <div className="md:hidden">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-black font-medium text-sm">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

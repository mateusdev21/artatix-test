import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white flex justify-center items-center h-[100vh]">
      <div className="w-1/2 hidden lg:block px-4 mr-8">
        <Image
          className="h-[96vh] w-full object-cover rounded-lg"
          src="/login-artwork.jpg"
          alt=""
          width="4096"
          height="2731"
          priority
        />
      </div>
      <div className="px-40 w-1/2 h-[100vh] place-content-center">
        {children}
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-start items-center mt-8 filter drop-shadow-lg">
      <Image
        src={"/images/propic.jpg"}
        alt="profile"
        width="48"
        height="48"
        className="rounded-full"
      />
      <Link href="/" passHref>
        <span className="font-proza font-extrabold text-blue-500 hover:text-blue-700 text-3xl mt-2 ml-5 flex-1 cursor-pointer">
          friandy.web.id
        </span>
      </Link>
    </header>
  );
};

export default Header;

import Link from "next/link";

const NavDropdownDesktop = ({ href, text }) => {
  return (
    <div className="w-full linkDropdownText">
      <Link href={href}>
        <span className="block px-4 py-2  underline underline-offset-4 w-max">{text}</span>
      </Link>
    </div>
  );
};

export default NavDropdownDesktop;

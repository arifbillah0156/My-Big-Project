import Link from "next/link";

const NavDropdownMobile = ({ href, text }) => {
  return (
    <Link href={href}>
      <span className="block px-4 py-2 underline underline-offset-4 text-sm linkDropdownText_M">{text}</span>
    </Link>
  );
};

export default NavDropdownMobile;

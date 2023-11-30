import { Link } from "@nextui-org/react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-default-400 text-xl rounded hover:text-default-300"
    >
      {title}
    </Link>
  );
};
export default NavLink;

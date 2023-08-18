import Link from "next/link";

const linksroutes = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Tienda",
    route: "/tienda",
  },
];

export default function NavBar() {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        {linksroutes.map((link) => (
          <li key={link.label}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

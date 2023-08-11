import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="w-full flex flex-row border-b border-amaranthpink shadow-lg">
        <Link
          href="/"
          className="mt-3 ml-5 bg-babypowder text-gunmetal text-xl font-semibold"
        >
          Portfolio
        </Link>
        <Link
          href="/projects"
          className="mt-3 ml-5 bg-babypowder text-gunmetal text-lg font-light"
        >
          All Projects
        </Link>
      </div>
    </>
  );
}

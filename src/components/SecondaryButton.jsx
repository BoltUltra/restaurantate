import Link from "next/link";

export default function ({ title, link }) {
  return (
    <button className="text-white border border-primary px-10 py-2 font-bold">
      <Link href={link}>{title}</Link>
    </button>
  );
}

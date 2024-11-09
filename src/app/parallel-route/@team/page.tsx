import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Route",
  description: "Team Route",
};

export default function TeamPage() {
  return (
    <div>
      <h3 className="font-bold mb-2">Team Members:</h3>
      <ul className="list-disc pl-5">
        <li>
          <Link
            href="/parallel-route/alice"
            className="text-blue-500 hover:underline"
          >
            Alice
          </Link>
        </li>
        <li>
          <Link
            href="/parallel-route/bob"
            className="text-blue-500 hover:underline"
          >
            Bob
          </Link>
        </li>
      </ul>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Route",
  description: "Team Route",
};

export default function TeamMemberPage({
  params,
}: {
  params: { member: string };
}) {
  return (
    <div>
      <h3 className="font-bold mb-2">Team Member: {params.member}</h3>
      <p className="mb-2">This is the profile page for {params.member}.</p>
      <Link href="/parallel-route" className="text-blue-500 hover:underline">
        Back to Team List
      </Link>
    </div>
  );
}

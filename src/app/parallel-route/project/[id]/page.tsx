import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Details",
  description: "Project Details Page",
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Project {params.id}</h2>
      <p className="mb-4">This is the details page for Project {params.id}.</p>
      <Link href="/parallel-route" className="text-blue-500 hover:underline">
        Back to Main Page
      </Link>
    </div>
  );
}

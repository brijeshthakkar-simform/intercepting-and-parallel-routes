import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parallel Routes",
  description: "Parallel Routes Demo",
};

export default function ParallelRoutePage() {
  return (
    <div>
      <p className="mb-4">
        This is the main content of the parallel route demo.
      </p>
      <Link
        href="/parallel-route/project/1"
        className="text-blue-500 hover:underline"
      >
        View Project 1
      </Link>
    </div>
  );
}

import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intercepting and Parallel Routes",
  description: "Intercepting and Parallel Routes Demo",
};

const Home = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <div>Intercepting and Parallel Routes</div>
          <div className="flex space-x-4">
            <Link
              href="/parallel-route"
              className="text-blue-500 hover:underline"
            >
              Parallel route
            </Link>

            <Link
              href="/intercept-route"
              className="text-blue-500 hover:underline"
            >
              Intercepting route
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

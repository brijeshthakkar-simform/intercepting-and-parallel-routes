import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "User details",
  description: "User details page",
};

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Editor",
  },
];

export default function UserDetails({ params }: { params: { id: string } }) {
  const user = users.find((u) => u.id === parseInt(params.id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <Link
            href="/intercept-route"
            className="text-blue-500 hover:underline"
          >
            Back to intercept route
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

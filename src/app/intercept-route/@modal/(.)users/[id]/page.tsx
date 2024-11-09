"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function UserModal({ params }: { params: { id: string } }) {
  const router = useRouter();
  const user = users.find((u) => u.id === parseInt(params.id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <Button onClick={() => router.back()} className="mt-4">
            Close
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

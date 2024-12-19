import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "all users",
};

export const dynamic = "force-dynamic";

interface User {
  id: number;
  username: string;
}

export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return (
    <div className="space-y-4">
      <h1>list of all users</h1>
      <ul className="list-disc pl-4">
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

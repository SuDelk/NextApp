import { notFound } from "next/navigation";

async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function UserPage({
  params,
}: Readonly<{
  params: Promise<{ userId: string }>;
}>) {
  const { userId } = await params;
  const user = await fetchUser(userId);

  if (!user) {
    notFound();
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          User Page - User ID: {userId}
        </h1>

        <p className="text-lg text-zinc-700 dark:text-zinc-300 mt-6">
          <strong>Name:</strong> {user.name}
        </p>

        <p className="text-lg text-zinc-700 dark:text-zinc-300 mt-2">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="text-lg text-zinc-700 dark:text-zinc-300 mt-2">
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </p>
      </main>
    </div>
  );
}

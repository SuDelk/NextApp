import Link from "next/link";

export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log("Fetched users:", users.slice(0, 2)); // log first two users for brevity
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Users List
        </h1>
        <ul className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mt-6">
          {users.map((user: { id: number; name: string; email: string }) => (
            <li key={user.id} className="mb-4">
              <Link href={`/users/${user.id}`}>
                <h2 className="text-xl font-medium text-black dark:text-zinc-50">
                  {user.name}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">{user.email}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

import Image from "next/image";
import ButtonComponent from "./ButtonComponent";

export default async function Contact() {
  console.log("Contact page loaded");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // to disable caching and always fetch fresh data
  });
  const data = await response.json();
  console.log("Fetched data:", data); // log first two items for brevity

  /* Upside of server side rendering
   * SEO friendly
   * Faster initial load
   * Easier to implement (no need for client side state management  or hooks
   * Better for static content
   * Easier to secure (no client side code exposure)
   * Better for accessibility
   * Easier to maintain
   * Better for performance on low end devices
   * Easier to cache and optimize
   * Reduces client side javascript bundle size
   * Easier to implement internationalization (i18n)
   * Better for content that doesn't change often
   * Easier to implement analytics and tracking
   * Better for web crawlers and bots
   * Easier to implement server side logic and data fetching
   */
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Contact Us Page
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mt-6">
          This is the Contact Us page of our application. Feel free to reach out
          to us for any inquiries or support.
        </p>
        <ButtonComponent title={data[0].title}/>
        <Image
          src="https://iucn.org/sites/default/files/2025-08/reticulated-giraffe-giraffa-reticulata_kenya-laikipia-plateau_copyrightmichaelbrown.jpg"
          alt="Contact Us"
          width={600}
          height={400}
          className="mt-8 rounded-lg shadow-lg"
          priority
        />
      </main>
    </div>
  );
}

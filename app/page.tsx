import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="h-20 text-4xl font-bold flex items-center">DevNest</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/login" className={buttonVariants({ variant: "default" })}>Login</Link>
        <Link href="/signup" className={buttonVariants({ variant: "outline" })}>Cadastrar</Link>
      </div>
    </main>
  );
}

"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface Inputs {
  username: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); }

  return (
    <main className="min-h-screen flex flex-col px-8 md:px-48 xl:px-96">
      <h1 className="h-20 flex items-center text-2xl font-bold">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold text-lg">Nome de usuário</label>
          {errors.username && <span className="text-red-500">Preencha seu nome de usuário.</span>}
          <input
            type="text"
            {...register("username", { maxLength: 128, required: true })}
            placeholder="Nome de usuário"
            className={`w-64 md:w-80 p-2 border transition outline-none rounded focus:ring-1 ${errors.username ? "border-red-500 focus:ring-red-500" : "border-zinc-300 focus:border-zinc-400 focus:ring-zinc-400"}`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-bold text-lg">Senha</label>
          {errors.password && <span className="text-red-500">Preencha sua senha.</span>}
          <input
            type="password"
            {...register("password", { maxLength: 128, required: true })}
            placeholder="Senha"
            className={`w-64 md:w-80 p-2 border transition outline-none rounded focus:ring-1 ${errors.password ? "border-red-500 focus:ring-red-500" : "border-zinc-300 focus:border-zinc-400 focus:ring-zinc-400"}`}
          />
        </div>
        <Button asChild>
          <input type="submit" className="w-20 cursor-pointer" />
        </Button>
      </form>
    </main>
  );
}

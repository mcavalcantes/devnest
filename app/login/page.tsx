"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

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

  const { toast } = useToast();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast({
      title: "Sucesso!",
      description: "Você será redirecionado para a página de login.",
    });

    console.log(data);
    // DO SOME SHIT HERE
  };

  return (
    <>
      <main className="min-h-screen flex flex-col px-8 md:px-48 xl:px-96">
        <h1 className="h-20 flex items-center text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="flex flex-col">
            <label htmlFor="username" className="font-bold text-lg">Nome de usuário</label>
            {
              errors.username?.type === "required" ?
              <span className="text-red-500">Preencha seu nome de usuário.</span> :
            
              errors.username?.type === "minLength" ?
              <span className="text-red-500">O nome de usuário deve ter pelo menos 4 caracteres.</span> :

              errors.username?.type === "maxLength" ?
              <span className="text-red-500">O nome de usuário deve ter no máximo 128 caracteres.</span> :

              null
            }
            <input
              type="text"
              {...register("username", { minLength: 4, maxLength: 128, required: true })}
              className={`w-64 md:w-80 p-2 border border-zinc-300 transition outline-none rounded focus:ring-1 ${errors.username ? "border-red-500 focus:ring-red-500" : "focus:border-zinc-400 focus:ring-zinc-400"}`}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-bold text-lg">Senha</label>
            {
              errors.password?.type === "required" ?
              <span className="text-red-500">Preencha sua senha.</span> :
            
              errors.password?.type === "minLength" ?
              <span className="text-red-500">A senha deve ter pelo menos 8 caracteres.</span> :

              errors.password?.type === "maxLength" ?
              <span className="text-red-500">A senha deve ter no máximo 128 caracteres.</span> :

              null
            }
            <input
              type="password"
              {...register("password", { minLength: 8, maxLength: 128, required: true })}
              className={`w-64 md:w-80 p-2 border border-zinc-300 transition outline-none rounded focus:ring-1 ${errors.password ? "border-red-500 focus:ring-red-500" : "focus:border-zinc-400 focus:ring-zinc-400"}`}
            />
          </div>
          <Button asChild>
            <input type="submit" className="w-20 cursor-pointer" />
          </Button>
        </form>
      </main>
      <Toaster />
    </>
  );
}

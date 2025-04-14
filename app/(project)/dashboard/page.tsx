import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    //Server side
    const session = await auth();

    if (!session) {
        return redirect("/login");
    }

    return (
        <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl">Protected Dashboard</h1>
            <p>{session?.user?.email ? session?.user?.email : "Usuário não esta logado!"}</p>
            {
                session?.user?.email && (
                    <form
                        action={handleAuth}
                    >
                        <button type="submit" className="bg-slate-100 p-2 border-1 rounded-2xl cursor-pointer">
                            Logout
                        </button>
                    </form>
                )
            }
        </div>
    );
}

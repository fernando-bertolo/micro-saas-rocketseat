import { handleAuth } from "@/app/actions/handle-auth";

export default function Login() {
    return (
        <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl">Landing Page</h1>
            <form
                action={handleAuth}
            >
                <button type="submit" className="bg-slate-100 p-2 border-1 rounded-2xl cursor-pointer">Signin with Google</button>
            </form>
        </div>
    )
}
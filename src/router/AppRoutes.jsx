import Login from "@/app/login/page";
import Register from "@/app/register/page";
import { useRouter } from "next/navigation";
import { BrowserRouter, Routes } from "react-router-dom";

export function AppRoutes () {
    
    const router = useRouter();
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[--color-latar]">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-4xl font-poppins font-extrabold text-[--color-teks]">
                        <span className="text-[--color-biru]">Azguh</span>
                        <span className="text-[--color-teks]">Waterpark</span>
                    </h1>
                </div>

                <Outlet />

                <p className="text-center text-sm text-[--color-teks-samping] mt-6">
                    © 2025 Azguh Waterpark. All rights reserved.
                </p>
            </div>
        </div>
    )
}

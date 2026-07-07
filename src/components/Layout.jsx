import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {

    return (

        <div className="min-h-screen bg-[#F8FAFC] flex">

            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">

                <Navbar />

                <main className="flex-1 overflow-y-auto p-8">

                    {children}

                </main>

            </div>

        </div>

    );

}
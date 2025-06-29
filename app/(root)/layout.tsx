import React from "react";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { Toaster } from "@/components/ui/toaster";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar {...currentUser} />
        <section className="flex flex-1 flex-col">
          <MobileNavigation {...currentUser} />
          <Header userId={currentUser.$id} accountId={currentUser.accountId} />
          <div className="main-content flex-1">{children}</div>
          <Footer />
        </section>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;

import React from "react";
import Image from "next/image";
import FileUploader from "@/components/FileUploader";
import Search from "@/components/Search";
import { signOutUser } from "@/lib/actions/user.actions";

interface HeaderProps {
  userId: string;
  accountId: string;
}

const Header = ({ userId, accountId }: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <form
          action={async () => {
            "use server";
            await signOutUser();
          }}
        >
          <button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="w-6"
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;

"use Client";
import { SignedIn } from "@clerk/clerk-react";
import { SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      HomePage
      <SignedOut>
        <SignInButton/>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    </div>
  );
};

export default HomePage;
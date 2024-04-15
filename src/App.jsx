import phdbotLogo from "./assets/PhDBot_Long.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <>
      <a href="https://phdbot.rndverse.com/" target="_blank">
        <img src={phdbotLogo} className="logo" alt="PhDBot" />
      </a>
      <a href="https://phdbot.rndverse.com/" target="_blank">
        <h1>Build Your Own PhDBot Classroom</h1>
	      <h2>Develop your own expert trained PhD-Level AI-Agents </h2>
      </a>
      <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      </div>
    </>
    
  );
}

export default App;

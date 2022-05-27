import { useState } from "react";
import Image from "next/image";
import { AuthInput } from "../components/auth/AuthInput";
import { WarningIcon } from "../components/icons";

//import googleIcon from "/assets/imgs/google-icon.svg";

export default function Auth() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function showingError(msg: any, timeSeconds = 5) {
    setError(msg);
    setTimeout( () => setError(null) , timeSeconds * 1000);
  }

  function submit() {
    if (mode === "login") {
      console.log("login");
      showingError("login");      
    } 
    else if (mode === "register") {
      console.log("register");
      showingError("register");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img 
          src="https://source.unsplash.com/random" 
          alt="Background image to auth screen" 
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-4/5 md:w-1/2 lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === "login" ? "Sign in with you account" : "Create a count in the platform"}
        </h1>
        {error ? (
          <div
            className={`flex items-center gap-x-2 py-3 px-5 my-2
            border border-red-700 rounded-lg bg-red-400 text-white font-semibold`}
          >
            {WarningIcon()}
            <span>Error in the {error}. Please, try again.</span>
          </div>
        ) : false}
        <AuthInput
          label="Email"
          type="email"
          value={email}
          handleValueChange={setEmail}
          essential
        />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          handleValueChange={setPassword}
          essential
        />
        <button 
          onClick={() => submit()}
          className={`w-full mt-6 px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white`}
        >
          {mode === "login" ? "Sign in" : "Register"}
        </button>
        <hr className="my-6 border-gray-300 w-full"/>
        <button
          onClick={() => submit()}
          className={`flex items-center justify-center gap-2 w-full mt-6 px-3 py-2 rounded-lg
          bg-red-500 hover:bg-red-400 text-white`}
        >
          <Image src="/assets/imgs/google-icon.svg" alt="Google icon" width="20px" height="20px" />
          {mode === "login" ? "Sign in with Google" : "Register with Google"}
        </button>
        {mode === "login" ? (
          <p className="mt-8">
            New user?
            <a 
              onClick={() => setMode("register")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            > Create a free count here</a>
          </p>
        ) : (
          <p className="mt-8">
            Have a count?
            <a 
              onClick={() => setMode("login")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            > Sign in here</a>
          </p>
        )}
    </div>
      </div>

  );
}
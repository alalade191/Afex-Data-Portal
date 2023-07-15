import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { createContext, useState, Dispatch, SetStateAction } from "react";

export interface IContextType {
  authUser: IAuthUser | null;
  setAuthUser: Dispatch<SetStateAction<IAuthUser | null>>;
}
interface IAuthUser {
  user: {
    email: string;
    first_name: string;
    is_active: boolean;
    last_name: string;
  };

  middle_name: string;
  martial_status: string;
  role: string;
  phone_number: string;
  gender: string;
  next_of_kin_first_name: string;
  next_of_kin_last_name: string;
  next_of_kin_email: string;
  next_of_kin_relationship: string;
  unique_id: string;
  token: {
    access: string;
    refresh: string;
  };
}

export const AuthContext = createContext<IContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
  let data = { authUser, setAuthUser };
  return (
    <ThemeProvider attribute="class">
      <AuthContext.Provider value={data}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

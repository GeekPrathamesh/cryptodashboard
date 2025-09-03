import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

export const Usercontext = createContext();

export default function Authprovider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  useEffect(() => {
    const savedToken = cookies.jwt;
    if (savedToken) {
      try {
        const { exp } = jwtDecode(savedToken);
        if (Date.now() < exp * 1000) {
          setToken(savedToken);
        } else {
          removeCookie("jwt", { path: "/" });
        }
      } catch (error) {
        console.error("Invalid token", error);
        removeCookie("jwt", { path: "/" });
      }
    }
    setLoading(false); // ✅ Done checking cookies
  }, [cookies, removeCookie]);

  const login = (tokenStr) => {
    if (tokenStr) {
      setToken(tokenStr);
      const { exp } = jwtDecode(tokenStr);
      setCookie("jwt", tokenStr, {
        path: "/",
        maxAge: exp - Math.floor(Date.now() / 1000),
        sameSite: true,
      });
      return;
    }
    logout();
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    removeCookie("jwt", { path: "/" });
  };

  return (
    <Usercontext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </Usercontext.Provider>
  );
}

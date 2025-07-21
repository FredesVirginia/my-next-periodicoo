import CreatedSecondPlantilla from "@/components/plantillasTypePeriodico/createPlantillas/createSecondPlantilla";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { ACCESS_TOKEN_KEY } from "./login";

export default function CreateNews() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = secureLocalStorage.getItem(ACCESS_TOKEN_KEY);
    if (!token) {
      router.push("/login"); // Redirige si no hay token
    } else {
      setIsAuth(true); // Permite renderizar si hay token
    }
  }, [router]);

  if (!isAuth) return null; // o un loading spinner

  return (
    <div>
      <CreatedSecondPlantilla />
    </div>
  );
}

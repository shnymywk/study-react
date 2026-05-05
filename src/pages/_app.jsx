import "@/styles/globals.css";
import { useCounter } from "@/components/hooks/useCounter";
import { useInputArray } from "@/components/hooks/useInputArray";

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  
  return (
  <>
      <Component {...pageProps}{...counter}{...inputArray} />
  </>
  );
}

export default MyApp;
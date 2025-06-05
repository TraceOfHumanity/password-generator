import {useAppSelector} from "@/hooks";
import {useEffect, useState} from "react";
import { FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

export const PasswordGeneratorReadyPassword = () => {
  const {password} = useAppSelector((state) => state.password);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isCopied]);

  if (!password) return null;

  return (
    <div className="text-xl font-bold flex items-center gap-2">
      {password}{" "}
      <button
        className="relative after:absolute after:left-[-50%] after:top-[-30px] after:z-10 after:-translate-x-1/2 after:transform after:rounded-md after:bg-black after:px-2 after:py-1 after:text-xs after:text-white after:opacity-0 after:transition-all after:duration-300 after:ease-in-out after:content-[attr(data-tooltip)] hover:after:opacity-100 ml-auto"
        onClick={() => {
          navigator.clipboard.writeText(password);
          setIsCopied(true);
        }}
        data-tooltip={isCopied ? "Copied!" : "Copy"}>
        {isCopied ? <FaCheck /> : <IoCopyOutline />}
      </button>
    </div>
  );
};

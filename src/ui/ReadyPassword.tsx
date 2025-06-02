import React from "react";
import {FaCheck} from "react-icons/fa6";
import {IoCopyOutline} from "react-icons/io5";

import {useAppSelector} from "hooks/useReduxToolkit";

export const ReadyPassword = () => {
  const {password} = useAppSelector((state) => state.password);
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <div className="flex items-center justify-between gap-2">
      <div>{password}</div>
      <button
        className="relative after:absolute after:left-[-50%] after:top-[-30px] after:z-10 after:-translate-x-1/2 after:transform after:rounded-md after:bg-black after:px-2 after:py-1 after:text-xs after:text-white after:opacity-0 after:transition-all after:duration-300 after:ease-in-out after:content-[attr(data-tooltip)] hover:after:opacity-100"
        onClick={() => {
          navigator.clipboard.writeText(password);
          setIsCopied(true);
        }}
        data-tooltip={isCopied ? "Copied!" : "Copy"}
      >
        {isCopied ? <FaCheck /> : <IoCopyOutline />}
      </button>
    </div>
  );
};
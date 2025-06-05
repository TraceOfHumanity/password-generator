import {useAppSelector} from "@/hooks";

export const PasswordGeneratorReadyPassword = () => {
  const {password} = useAppSelector((state) => state.password);
  return <div className="text-xl font-bold">{password}</div>;
};

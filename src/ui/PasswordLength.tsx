import {useAppSelector} from "hooks/useReduxToolkit";

export const PasswordLength = () => {
  const {passwordLength} = useAppSelector((state) => state.password);
  return <div>Password length: {passwordLength}</div>;
};
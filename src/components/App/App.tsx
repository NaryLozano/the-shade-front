import { useEffect } from "react";
import useToken from "../../hooks/token/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => {
  const { getItemLocalStorage } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getItemLocalStorage("token");

    if (token) {
      const userData = getTokenData(token);

      dispatch(loginUserActionCreator(userData));
    }
  }, [dispatch, getItemLocalStorage, getTokenData]);
  return <Layout />;
};

export default App;

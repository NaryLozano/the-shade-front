import { useEffect } from "react";
import useToken from "../../hooks/useToken/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";

const App = (): React.ReactElement => {
  const { getItemLocalStorage } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getItemLocalStorage("token");

    if (token) {
      const userData = getTokenData(token);

      dispatch(loginUserActionCreator({ ...userData, token: token }));
    }
  }, [dispatch, getItemLocalStorage, getTokenData]);

  return <Layout />;
};

export default App;

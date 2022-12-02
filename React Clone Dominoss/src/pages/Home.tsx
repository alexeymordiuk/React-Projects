import React from "react";
import NavBar from "../components/navigation/NavBar";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/userAuth";
import Products from "../components/navigation/Products";

const Home: React.FC = () => {
  const { isAuth, email } = useAuth();
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate('/pizzas')
  }, [])

  return isAuth ? (
    <>
      <Products/>
      <NavBar />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;

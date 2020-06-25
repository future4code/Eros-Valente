import React from "react";

const useToken = () => {
  const token = window.localStorage.getItem("token")

  if (token === null) {
      history.push("/login")
  }

  return token;
}

export default useToken;
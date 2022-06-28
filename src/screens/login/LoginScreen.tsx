import React, { FormEvent } from "react";

const API_URL = process.env.REACT_APP_SERVER_URL;

const LoginScreen = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const pwd = (event.currentTarget.elements[1] as HTMLInputElement).value;
    fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, pwd})
    }).then(response => response.json())
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>用户名: <input type="text" /></label>
      <label>密  码: <input type="password" /></label>
      <button type="submit">提交</button>
    </form>
  )
}

export default LoginScreen;

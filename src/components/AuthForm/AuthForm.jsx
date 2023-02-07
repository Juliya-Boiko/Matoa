import { useState } from "react";

export const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(prevState => !prevState);
  }; 

  return (
    <div>
      {isRegister
      ? <form>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button type="submit">Log In</button>
          
        </form >
      : <form>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="name" />
          <button type="submit">Register</button>
        </form>
      }
      <button onClick={toggleForm}>
        {isRegister ? "Dont have account" : "Already have accoun"}
      </button>
    </div>
  );
};
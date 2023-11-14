import React, { useState } from "react";

function Keypad() {
  const [password, setPassword] = useState("");

  function handleChange(event) {
    console.log('Entering password...');
    setPassword(event.target.value);
  }

  return (
    <form>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handleChange}
      />
    </form>
  );
}

export default Keypad;

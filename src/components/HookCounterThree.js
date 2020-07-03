import React, { useState } from "react";

function HookCounterThree() {
  const initialState = {
    firstName: "",
    lastName: "",
  };
  const [name, setName] = useState(initialState);

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <p>FirstName: {name.firstName}</p>
        <p>LastName: {name.lastName}</p>
      </form>
    </div>
  );
}

export default HookCounterThree;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
export let userView = () => {
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of the best shop customers:</h2>
      <h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && user.users.length ? (
          <ul key={user}>
            {user.users.map((user) => (
              <li key={user.id}>
                <p>{user.name}</p> <p>User Email: {user.email}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </h2>
    </div>
  );
};

export default userView;

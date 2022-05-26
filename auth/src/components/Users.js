import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <nav>
      <Link to="1">User1</Link>
      <Link to="2">User2</Link>
      <Link to="3">User3</Link>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </nav>
  );
};

import React, { Component } from "react";

export const Header = () => (
<header className="container-fluid d-flex justify-content-center">
  <p className="text-light mb-3 p-2 fs-3"><b>4-SCHOOL</b></p>
 
  <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary">
              LOGIN
            </button>
          </Link>
        </div>
</header>
);

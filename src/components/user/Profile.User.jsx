import React, { lazy } from "react";
const NavBar = lazy(() => import("../NavBar"));
const Footer = lazy(() => import("../Footer"));

const Profile = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* header */}
        <NavBar />
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Profile;
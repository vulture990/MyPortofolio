import React, { FC, ReactNode } from "react";
import Navigation from "./Navigation";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
     <Header
       title="Salbi Mohamed -Software Engineer, Creator"
       />
      <div className="flex flex-col h-screen container mx-auto px-6">
        <Navigation />
        {children}
      </div>
    </>
  );
};

export default Layout;

import React, { useState } from "react";

const useActiveLink = (initialState) => {
  const [activeLink, setActiveLink] = useState(initialState);

  const handleActiveLink = (path) => {
    setActiveLink(path);
  };

  return { activeLink, handleActiveLink };
};

export default useActiveLink;

import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElement = links.map((link)=>{
    const hyperLink = '#'+link
    return <a key={link} href={hyperLink}>{link}</a>
  })

  return <nav>{linkElement}</nav>;
}

export default NavBar;

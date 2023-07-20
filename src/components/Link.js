import React from "react";

function Links({ github, linkedin }) {
  return (
    <>
      <h2>Links</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </>
  );
}

export default Links;
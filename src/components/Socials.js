import React from 'react'

import {
    ImFacebook,
    ImTwitter,
    ImPinterest,
    ImInstagram,
    ImYoutube,
} from "react-icons/im"

const Socials = () => {
  return (
      <div
          className={"hidden xl:flex ml-24"}
      >
        <ul
            className={"flex gap-x-4"}
        >
          <li><a href={"https://www.facebook.com/by_siwe"} target={"_blank"}>
            <ImFacebook />
          </a></li>

          <li><a href={"https://www.twitter.com/by_siwe"} target={"_blank"}>
            <ImTwitter />
          </a></li>

          <li><a href={"https://www.pinterest.com/by_siwe"} target={"_blank"}>
            <ImPinterest />
          </a></li>

          <li><a href={"https://www.instagram.com/by_siwe"} target={"_blank"}>
            <ImInstagram />
          </a></li>

          <li><a href={"https://www.youtube.com/by_siwe"} target={"_blank"}>
            <ImYoutube />
          </a></li>
        </ul>
      </div>
  )
};

export default Socials;

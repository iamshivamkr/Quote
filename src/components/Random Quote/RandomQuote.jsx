import React, { useState } from "react";
import "./RandomQuote.css";

import { TbReload } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const RandomQuote = () => {
  let quotes = [];

  async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
    console.log(quotes);
  }

  const [quote, setQuote] = useState({
    text: "Never give up",
    author: "Every author ever",
  });
  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const X = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  const Insta = () => {
    window.open(
      `https://www.instagram.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  getQuote();
  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <TbReload
              className="pointer"
              onClick={() => {
                random();
              }}
            />
            <RiTwitterXLine
              className="pointer"
              onClick={() => {
                X();
              }}
            />
            <FaInstagram
              className="pointer"
              onClick={() => {
                Insta();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;

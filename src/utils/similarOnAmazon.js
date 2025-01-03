// const puppeteer = require("puppeteer");
// import puppeteer from "puppeteer";
// const axios = require('axios').default;
import axios from "axios";
const cheerio = require("cheerio");

const similarOnAmazon = async ({ product_name }) => {
  const proxyUrl = "https://proxy.corsfix.com/?";
  const searchUrl = `https://www.amazon.com.br/s?k=${encodeURIComponent(
    product_name
  )}`;

  const html = await axios({
    method: "get",
    baseURL: `${proxyUrl}${searchUrl}`,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-headers": "*",
      "X-Requested-With": "XMLHttpRequest",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "pt-BR,pt;q=0.8",
      Priority: "u=0, i",
      "Sec-CH-UA": '"Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      "Sec-CH-UA-Mobile": "?0",
      "Sec-CH-UA-Platform": '"Windows"',
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "none",
      "Sec-Fetch-User": "?1",
      "Sec-GPC": "1",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    },
  });

  const $ = cheerio.load(html.data);
  const products = [];

  $('[role="listitem"]').each((index, item) => {
    // const name = $(item).find(".a-text-normal").text();
    const name = $(item).find("h2 span").text();
    const price = `${$(item).find(".a-price-whole").text()}${$(item)
      .find(".a-price-fraction")
      .text()}`;

    const image = $(item).find(".s-image").attr("src");
    const link =
      "https://www.amazon.com.br/" +
      $(item).find(".a-link-normal.s-no-outline").attr("href");

    if (name && price && image && link) {
      products.push({ name, price, image, link });
    }
  });

  return products;
};

export default similarOnAmazon;

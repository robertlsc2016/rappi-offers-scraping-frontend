import axios from "axios";

const headers = {
  accept: "application/json",
  "accept-language": "pt-BR",
  "access-control-allow-headers": "*",
  "access-control-allow-origin": "*",
  "app-version": "web_v1.216.6",
  authorization:
    "Bearer ft.gAAAAABna3dHBFnU3j-dj3_c847J7bbD11njsHGATzfoxWyi0QalaOYPTNMG2fHLdg3MP4p195oT6Duw-xxgRxD1S79KlqLGy4HQrwY4rTCJEk4V_LfzDYDiZYsSn-gsd5bhol07tylfwI6M4ZcTlCFn6h4RAS4YvXsqgz3bk4JUSUshkPJBABYeNZmP8FDJIKjBVtgHkX69zxK5hWOsVOckc2W0rI4B2j4mupa7vBHPuM3se1V56Mgms8E11mubbOkn2N4IK7h3U4x1T4fUtIChVBAADJU7mrYZOqxf79HztrkUudXfgEcywMRTv1tAdfGLpEEGUk6Lt4tzHZX5u9K1XDoEJGcA5N1Do5fyoQttnY9emMeCYOwDLofmsWaP_X3mteau93efw4agEOaLo8uUcXxCAmCW0A==",
  "content-type": "application/json",
  deviceid: "3577be35-6122-430f-9f9d-4e5d7cdfc166",
  include_context_info: "true",
  language: "pt",
  needappsflyerid: "false",
  origin: "https://www.rappi.com.br",
  priority: "u=1, i",
  referer: "https://www.rappi.com.br/",
  "sec-ch-ua": '"Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
  "sec-ch-ua-mobile": "?1",
  "sec-ch-ua-platform": '"Android"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-site",
  "sec-gpc": "1",
  "user-agent":
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
};

const Axios = axios.create({
  headers: headers,
});

export default Axios;

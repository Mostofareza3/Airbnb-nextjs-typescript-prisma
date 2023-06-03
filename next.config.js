/** @type {import('next').NextConfig} */
const nextConfig = {};

experimental: {
  reactRootAttributes: {
    // Remove extra attributes from the body of the HTML document
    dataNewGrCsCheckLoaded: false;
    dataGrExtInstalled: false;
    czShortcutListen: false;
  }
}

images: {
  domains: ["avatars.githubusercontent.com"];
}

module.exports = nextConfig;

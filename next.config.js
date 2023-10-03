
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Tumisang",
        mongodb_password: "biggesmall1998",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  } 

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "Tumisang",
      mongodb_password: "biggesmall1998",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

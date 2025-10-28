import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://helpful-shad-38.clerk.accounts.dev/",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;
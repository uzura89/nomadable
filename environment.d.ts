declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV_NEXT: "development" | "production";
      BASE_URL: string;
      DB_URL: string;
      GAPI_CLIENT_ID: string;
      GAPI_CLIENT_SECRET: string;
      GAPI_KEY: string;
      GA_MEASUREMENT_ID: string;
      SENDGRID_API_KEY: string;
      JWT_SECRET: string;
      MAPBOX_ACCESS_TOKEN: string;
      UNSPLASH_ACCESS_KEY: string;
      UNSPLASH_SECRET_KEY: string;
      GOOGLE_TAG_MANAGER_ID: string;
      SPEED_OF_ME_ACCOUNT_CODE: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};

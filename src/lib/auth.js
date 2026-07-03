import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { bearer } from "better-auth/plugins";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ac-rtnaisy-shard-00-00.calsbfo.mongodb.net:27017,ac-rtnaisy-shard-00-01.calsbfo.mongodb.net:27017,ac-rtnaisy-shard-00-02.calsbfo.mongodb.net:27017/?ssl=true&replicaSet=atlas-g8deso-shard-0&authSource=admin&appName=Cluster0`;

const client = new MongoClient(uri);
const db = client.db("life_lessons_db");

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [process.env.BETTER_AUTH_URL].filter(Boolean),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "placeholder_google_id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "placeholder_google_secret",
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
      },
    },
  },
});

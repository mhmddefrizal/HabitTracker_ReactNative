import { Account, Client, Databases } from 'react-native-appwrite'

export const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setPlatform(process.env.NEXT_PUBLIC_APPWRITE_PLATFORM!);

export const account = new Account(client)

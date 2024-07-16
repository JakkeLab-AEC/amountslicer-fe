import { configDotenv } from 'dotenv';
configDotenv();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transpilePackages: ['three'],
    env: {
        IFC_SERVER_HOST: process.env.SERVER_HOST,
        IFC_SERVER_PORT: process.env.SERVER_PORT,
    }
};
    
export default nextConfig;

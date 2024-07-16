import axios from "axios";

const serverHostUrl = `http://${process.env.IFC_SERVER_HOST}:${process.env.IFC_SERVER_PORT}`;
export async function connectionTest():Promise<any> {
    const endpoint = "/connectionTest";
    const response = axios.get(serverHostUrl+endpoint).then(res => {
        console.log(res);
    });
}
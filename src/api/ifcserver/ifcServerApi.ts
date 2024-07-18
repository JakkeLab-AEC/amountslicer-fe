import axios from "axios";

const serverHostUrl = `http://${process.env.IFC_SERVER_HOST}:${process.env.IFC_SERVER_PORT}`;
const endpoints = {
    "ConnectionTest":"/connectionTest",
    "IFCUpload":"/uploadfile",
    "IFCGetGeometry":"/getgeometry"
}

export async function connectionTest():Promise<any> {
    const endpoint = endpoints.ConnectionTest
    axios.get(serverHostUrl+endpoint).then(res => {
        console.log(res);
    });
}

export async function uploadIfcFile(uploadFile: File) {
    const endpoint = endpoints.IFCUpload;
    console.log(serverHostUrl+endpoint);

    const formData = new FormData();
    formData.append('file', uploadFile);
    try {
        const response = await axios.post(serverHostUrl + endpoint, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        console.log(response);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

export async function getGeometry(uploadFile: File){
    const formData = new FormData();
    formData.append('file', uploadFile);
    const endpoint = endpoints.IFCGetGeometry;
    try {
        const response = await axios.post(serverHostUrl + endpoint, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return JSON.parse(response.data)
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}
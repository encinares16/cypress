import dotenv from "dotenv";
dotenv.config();


const credential = {
    // username: 'qatest',
    username: process.env.USERNAME,
    password: 'ap0ll0',
}
const newCredential = {
    username: 'qatest',
    password: 'newpassword',
}

export default {credential, newCredential}

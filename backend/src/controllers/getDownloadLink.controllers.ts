
import axios from 'axios';
import { Context } from 'hono';

const baseAnitakuUrl = "https://anitaku.com.ro"

const getDownloadLinks = async (c: Context)=>{
    const {title} = c.req.param() as {title: string}

    const html = await axios.get(`${baseAnitakuUrl}/${title}`)
}
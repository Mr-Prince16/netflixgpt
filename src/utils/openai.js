import OpenAI from "openai";
import { OPENAI_Key } from "./constants";

const openai = new OpenAI({
    apiKey: OPENAI_Key,
    dangerouslyAllowBrowser: true,
});

export default openai;
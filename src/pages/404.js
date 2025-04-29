
import { baseTemplate } from "../templates/baseTemplate.js";
export function page404(req, res) {
    res.send(baseTemplate('', `
           <h1>404</h1>
            <p>Page not found</p>
            <p>:(</p>`));
    } 

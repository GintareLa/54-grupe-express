import { header } from "../components/header.js";
import { head } from "../components/head.js";
import { footer } from "../components/footer.js";
export function baseTemplate(title, pageContent) {
    return `
        <!DOCTYPE html>
        <html lang="en">
         ${head(title)}
        <body>
              ${header()}
              <main>${pageContent}</main>
              ${footer()}
              <script src="/js/main.js"></script>
        </body>
        </html>`;
}

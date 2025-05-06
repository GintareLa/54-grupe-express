
import { pageTitle } from "../components/pageTitle.js";
import { baseTemplate } from "../templates/baseTemplate.js";

export function pageAddText(req, res) {
    res.send(baseTemplate('Add text', 3, 
        `${pageTitle('Add text')}
        <section class="container">
            <div class="row">
                <form id="text_form" action="/api/text" method="POST" class="col-12 col-sm-10 col-md-8 col lg-6 col-xl-4 col-xxl4 form">
                    <label for="text">Text</label>
                    <textarea id="text" name="content"></textarea>
                    <button type="submit">Create</button>
                </form>
            </div>
        </section>`));

}

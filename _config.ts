//imports
import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import metas from "lume/plugins/metas.ts";
import prism from "lume/plugins/prism.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import sitemap from "lume/plugins/sitemap.ts";

// init site
const site = lume({
    src: "./src",
    components: {
        variable: "components"
    }
});

// adding plugins
site.use(tailwindcss({
    options: {
        darkMode: "class"
    }
}));
site.use(postcss());
site.use(metas());
site.use(prism());
site.use(sitemap())
site.use(multilanguage());

// ignored files/directories
site.ignore("README.md", "CHANGELOG.md");

// global variables | site info
site.data("siteInfo", {
    name: "Lume Template",
    version: 0.1,
    description: "A Simple template to kickstart your lume site ",
});

// image alts if not prsent
site.process([".html"], (page) => {
    page.document?.querySelectorAll("img").forEach((img) => {
        if (!img.hasAttribute("alt")) {
            img.setAttribute("alt", "Website image!");
        }
    });
});

// export
export default site;

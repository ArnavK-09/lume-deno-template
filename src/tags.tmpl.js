export const layout = "layouts/tags.njk";

export default function* ({ search }) {
    for (const tag of search.tags()) {
        yield {
            url: `/tags/${tag}/`,
            title: `Search results for Tag “${tag}”...`,
            type: "tag",
            tag,
        };
    }
}

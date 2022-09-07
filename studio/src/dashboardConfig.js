export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6318e75904dafa140ff869b2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-a4y7swgz",
                  apiId: "c58c2eb5-7b44-4d3c-af2a-f94d292b08a4",
                },
                {
                  buildHookId: "6318e75a5763151972ccbcca",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-po449wgp",
                  apiId: "6febadc9-e441-4fd0-97f7-1c2b2d80d03d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DAaveMITT/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-po449wgp.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

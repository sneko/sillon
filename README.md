# sillon

> [!IMPORTANT]
> The content and source code have been transferred to [beta.gouv](https://beta.gouv.fr/) and are now accessible onto:
>
> - [https://sillon.incubateur.net/](https://sillon.incubateur.net/)
> - [https://github.com/betagouv/sillon](https://github.com/betagouv/sillon)
>
> _The historical version on the branch `original` you are on is kept for informative purpose._

This project can serve as a knowledge base and a guide in making decisions for the implementation of a digital product within a French administration (and beyond). It is neither sponsored by an administration nor by a beta.gouv incubator. It is currently an initiative aimed at addressing a perceived gap.

_Only the technical part of Sillon is in English, while the rest is in French to facilitate adoption by the initial target audience. If you are looking for an English version, an automated translation through a plugin should generate something comprehensible._

## How it has been written

To facilite the collaboration on the first version we used a collaborative ".docx" and once we considered it as a first acceptable version we had to convert it to the Markdown format to be compatible with Docusaurus. For this we used `pandoc` and then we just splitted the result across multiple files depending on our document sections.

Since then we rely on direct text contributions but keep in mind this process can be reuse in case you write multiple big sections.

The command:

```sh
pandoc -f docx -t gfm-raw_html --extract-media=./static/assets/docs sillon.docx --wrap=none -o "sillon.mdx"
```

Then a few hacks to apply in the `.mdx` output:

- Give a size to images to avoid large ones
- Replace code sections with appropriate Docusaurus blocks
- Replace information sections with appropriate Docusaurus blocks
- Split the single output file into multiple ones and manage their sidebar position
- Adjust the `sidebars.js` file so the sidebar menu matches splitted files
- Move images next to the files they are displayed into, and rename them meaningfully
- Adapt relative links to target splitted files

## Technical setup of this repository

### Secrets

The following ones must be repository secrets (not environment ones) to be used during the CI/CD:

- `NETLIFY_AUTH_TOKEN`: [SECRET]
- `NETLIFY_SITE_ID`: [SECRET]
- `CRISP_WEBSITE_ID`: [SECRET]

### Hosting & domain

The "documentation" build is static and we chose Netlify to host it. Just configure the 2 environments variables you can find from the Netlify interface and you're good to go!

_Note: you can add a custom domain easily_

### Crisp

Crisp is used as a livechat to facilitate communication with people not used to GitHub issues. It makes us accessible and available to solve quick questions or discuss how to improve the guide.

From their interface we create a website named: `sillon`

Then upload as the icon the one used for the DSFR website (usually `apple-touch-icon.png` has enough quality).

Into the `Chatbox & Email settings` section go to `Chat Appearance` and set:

- Color theme (chatbot color): `Red`
- Chatbox background (message texture): `Default (No background)`

Then go to `Chatbox Security` and enable `Lock the chatbox to website domain (and subdomains)` (not need to enable it inside the development environment).

### PDF generation

You need [Prince](https://www.princexml.com/) installed through your package manager and to have the built website running to execute:

```bash
make generate-pdf
```

_(Ideally we wanted to use a Docker container directly but there is an ongoing issue with it https://github.com/signcl/docusaurus-prince-pdf/issues/34)_

### IDE

Since the most used IDE as of today is Visual Studio Code we decided to go we it. Using it as well will make you benefit from all the settings we set for this project.

## Contribute

As explained this guide is a suggestion but lot of point of views exist. We are definitely open to discussions to improve it, just post an issue or contact us through the livechat module on the website.

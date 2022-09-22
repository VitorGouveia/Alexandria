import { html, virtual, component, useState } from "./src/deps.js";

const tabs = [
  {
    name: "Sobre",
    content: html`<h1>Sobre</h1>`,
  },
  {
    name: "Formação",
    content: html`<h1>Formação contaea</h1> `,
  },
  {
    name: "Projetos",
    content: html`<h1>Projetos hihihi</h1> `,
  },
];

const SocialMedia = virtual(({ link, platform }) => {
  return html`<a href="${link}">${platform}</a> `;
});

const DetailsHeader = () => {
  const user = {
    name: "Vitor",
    email: "vitor.gouveia10@gmail.com",
    phone: "11 94013-6716",
    socialMedia: [
      {
        platform: "Linkedin",
        link: "https://br.linkedin.com/in/vitor-neves-gomes-gouveia-08ba391a7",
      },
      {
        platform: "Github",
        link: "https://github.com/VitorGouveia",
      },
    ],
    profilePicture: {
      url: "https://media-exp1.licdn.com/dms/image/C4E03AQHUhCYQePK_8w/profile-displayphoto-shrink_200_200/0/1588719961464?e=2147483647&v=beta&t=IFPf5NgW2sQ6qbu0tqCqFyxoCdglw4n51U_THW625kk",
      description:
        "This is an image of myself looking toward the camera with a death threat look",
    },
  };

  return html`
    <style>
      img {
        border-radius: 4px;
      }
    </style>

    <header>
      <img
        src="${user.profilePicture.url}"
        alt="${user.profilePicture.description}"
      />

      <h1 class="name">${user.name}</h1>

      <p>${user.email}</p>
      <p>${user.phone}</p>

      <ul>
        ${user.socialMedia.map(({ link, platform }) =>
          SocialMedia({ link, platform })
        )}
      </ul>
    </header>
  `;
};

const TabsNavigation = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].name);

  return html`
    <nav>
      <ul>
        ${tabs.map(
          ({ name }) =>
            html`
              <li>
                <button @click=${() => setCurrentTab(name)}>${name}</button>
              </li>
            `
        )}
      </ul>
    </nav>

    ${tabs.map(
      ({ name, content }) => html`
        <div style="display: ${name === currentTab ? "flex" : "none"}">
          ${content}
        </div>
      `
    )}
  `;
};

customElements.define("details-header", component(DetailsHeader));
customElements.define("tabs-navigation", component(TabsNavigation));

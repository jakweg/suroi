/* eslint-disable quotes,@typescript-eslint/quotes */
export interface NewsPost {
    date: number
    author: string
    title: string
    bannerImage?: string
    content: string
    longContent?: string
}

export const news: NewsPost[] = [
    {
        date: 1685914769000,
        author: "hasanger",
        title: "Feeling gassy",
        bannerImage: require("../../assets/img/news/v0.3.0.png"),
        content: `This week, gas has been added! Toxic gas now slowly fills up the map as the game progresses. Also, Suroi is now playable on mobile!`,
        longContent: `<h2>Suroi v0.3.0</h2>
<h3>New features</h3>
<ul>
  <li>Gas! Toxic gas now slowly fills up the map as the game progresses.</li>
  <li>Chicken dinners! If you're the last man standing, you now get to enjoy a delicious chicken dinner.</li>
  <li>Minimap! There is now a minimap in the top left. To expand it, press G or M. On mobile, simply tap the map.</li>
  <li>Mobile controls! Suroi is now playable on mobile. To use the controls, simply press and drag. The left joystick (left half of the screen) controls movement, and the right joystick (right half of the screen) controls aim and shooting.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Bullets now spawn at the barrel of the gun instead of at the player body.</li>
  <li>Fixed a visual bug causing bullets to go in the wrong direction near the edges of the map.</li>
  <li>Fixed a bug causing the wrong gun to continue firing when quickswitching.</li>
  <li>Fixed a bug allowing players to see more of the map by zooming out.</li>
</ul>`
    },
    {
        date: 1685317752000,
        author: "hasanger",
        title: "Fun guns",
        bannerImage: require("../../assets/img/news/v0.2.0.png"),
        content: `This week's update introduces guns, health crates, and keybinds! There are only 2 guns for now: the AK-47 and the M3K. More will be added soon.<br>If you're having issues with textures, try <a href="https://its.uiowa.edu/support/article/719">clearing your cache.</a>`,
        longContent: `<h2>Suroi v0.2.0</h2>
<h3>New features</h3>
<ul>
  <li>Guns! Added the AK-47 and M3K. More guns will be added soon, including the Mosin-Nagant.</li>
  <li>Health crates! These crates restore your health when broken. They are a temporary addition and will be removed once proper healing items are added.</li>
  <li>Keybinds! You can now remap keys. To edit keybinds, click the gear icon in the bottom right, or in-game, press Escape and click on Settings. Then, click on the Keybinds tab.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Fixed a visual bug causing players' fists to get stuck in the punching position.</li>
</ul>`
    },
    {
        date: 1684625426000,
        author: "hasanger",
        title: "We're back, baby",
        bannerImage: require("../../assets/img/news/v0.1.0.png"),
        content: `Kongregate may have shut down Surviv Reloaded, but that's not gonna stop me! Today, I'm releasing the first ever beta version of Suroi, an open-source 2D battle royale game inspired by surviv.io.
To report a bug or suggest something, <a href="https://discord.suroi.io" target="_blank" rel="noopener noreferrer">join the Discord server</a>. If you have any questions, check out the FAQ on <a href="https://suroi.io/news" target="_blank" rel="noopener noreferrer">the news page</a>.`,
        longContent: `<h2>FAQ</h2>
<h3>What is Suroi?</h3>
<p>Suroi is a new open-source 2D battle royale game inspired by surviv.io. After Surviv Reloaded, my first surviv.io revival project, got DMCA'd by Kongregate, the Surviv Reloaded team started work on a new game, Suroi. Suroi is similar to surviv, but it's built from the ground up with 100% original assets and code.</p>

<h3>Why isn't [feature] in the game yet? When will [feature] be added?</h3>
<p>The initial beta version of Suroi is very basic. Essential features like guns, loot, and buildings will be added in the next few weeks. For more information, check out the #roadmap channel on the Discord.</p>

<h3>I can't move.</h3>
<p>As the game is in early beta, we haven't added mobile controls yet. If you're on a mobile device, like a phone or tablet, there's no way to move yet.</p>

<h3>My game is laggy.</h3>
<p>The server is hosted in the United States. If you live far away from the US or you have slow Internet, lag is to be expected. In the future, servers will be hosted in other countries.</p>

<h3>I found a bug.</h3>
<p>To report a bug or suggest a feature, join the Discord. Post bugs in the #bugs channel, and suggestions in #suggestions. Before reporting a bug, please check to make sure someone else hasn't reported it already.</p>`
    }
];

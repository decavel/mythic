import "./discover.css";

const FEATURED = {
  title: "Luna & the Clockwork Kingdom",
  author: "Maya, age 9",
  description: "A brave inventor discovers a hidden kingdom where time has stopped — and only she can restart the great clock.",
  tags: ["Adventure", "Courage", "STEM"],
};

const ROWS = [
  {
    label: "Trending This Week",
    stories: [
      { title: "The Dragon's Lullaby", author: "Kai, 6", color: "from-rose/80 to-purple/80", emoji: "🐉" },
      { title: "Starship Panda", author: "Lily, 8", color: "from-teal/80 to-sky/80", emoji: "🐼" },
      { title: "The Kindness Quest", author: "Owen, 7", color: "from-gold/80 to-amber/80", emoji: "💛" },
      { title: "Jungle Detectives", author: "Mia, 10", color: "from-teal/60 to-purple/60", emoji: "🔍" },
      { title: "Robot Best Friend", author: "Sam, 5", color: "from-purple/80 to-rose/60", emoji: "🤖" },
      { title: "Ocean of Whispers", author: "Zoe, 9", color: "from-sky/80 to-teal/80", emoji: "🌊" },
    ],
  },
  {
    label: "Adventures & Quests",
    stories: [
      { title: "The Map of Lost Things", author: "Ava, 8", color: "from-amber/80 to-rose/60", emoji: "🗺️" },
      { title: "Sky Pirates!", author: "Theo, 7", color: "from-purple/60 to-sky/80", emoji: "🏴‍☠️" },
      { title: "The Hidden Garden", author: "Isla, 6", color: "from-teal/80 to-gold/60", emoji: "🌿" },
      { title: "Mountain of Echoes", author: "Noah, 9", color: "from-rose/60 to-amber/80", emoji: "⛰️" },
      { title: "Journey to the Stars", author: "Zara, 7", color: "from-purple/80 to-teal/60", emoji: "🚀" },
      { title: "The Enchanted Forest", author: "Leo, 5", color: "from-teal/60 to-rose/80", emoji: "🌳" },
    ],
  },
  {
    label: "Kindness & Friendship",
    stories: [
      { title: "Two Best Foxes", author: "Ella, 6", color: "from-amber/60 to-gold/80", emoji: "🦊" },
      { title: "The Sharing Stone", author: "Liam, 5", color: "from-teal/80 to-sky/60", emoji: "💎" },
      { title: "Brave Little Cloud", author: "Emma, 7", color: "from-sky/80 to-purple/40", emoji: "☁️" },
      { title: "The Thank You Train", author: "Jack, 4", color: "from-gold/80 to-teal/60", emoji: "🚂" },
      { title: "Harmony Village", author: "Aria, 8", color: "from-rose/60 to-purple/80", emoji: "🏘️" },
      { title: "The Listening Tree", author: "Finn, 6", color: "from-teal/60 to-amber/80", emoji: "🌲" },
    ],
  },
  {
    label: "Science & Discovery",
    stories: [
      { title: "Lab Coat Legends", author: "Cody, 9", color: "from-purple/60 to-teal/80", emoji: "🥼" },
      { title: "The Comet Catcher", author: "Ivy, 8", color: "from-sky/60 to-rose/60", emoji: "☄️" },
      { title: "Tiny World, Big Bugs", author: "Max, 6", color: "from-teal/80 to-gold/60", emoji: "🐛" },
      { title: "Professor Penguin", author: "Nora, 7", color: "from-purple/80 to-sky/60", emoji: "🐧" },
      { title: "Weather Wizards", author: "Ethan, 10", color: "from-amber/60 to-teal/80", emoji: "⛈️" },
      { title: "Deep Sea Lab", author: "Ruby, 8", color: "from-teal/60 to-purple/60", emoji: "🧪" },
    ],
  },
];

export default function Discover() {
  return (
    <div className="discover-page">
      {/* Featured hero banner */}
      <section className="featured-banner">
        <div className="featured-gradient" />
        <div className="featured-content">
          <div className="featured-badge">Featured Story</div>
          <h1 className="featured-title">{FEATURED.title}</h1>
          <p className="featured-author">by {FEATURED.author}</p>
          <p className="featured-desc">{FEATURED.description}</p>
          <div className="featured-tags">
            {FEATURED.tags.map((tag) => (
              <span key={tag} className="featured-tag">{tag}</span>
            ))}
          </div>
          <div className="featured-actions">
            <button className="featured-btn-primary">Read Story</button>
            <button className="featured-btn-secondary">+ My List</button>
          </div>
        </div>
      </section>

      {/* Story rows */}
      {ROWS.map((row) => (
        <section key={row.label} className="story-row">
          <h2 className="row-label">{row.label}</h2>
          <div className="row-scroll">
            {row.stories.map((story) => (
              <div key={story.title} className="story-card">
                <div className={`story-card-cover bg-gradient-to-br ${story.color}`}>
                  <span className="story-card-emoji">{story.emoji}</span>
                </div>
                <div className="story-card-info">
                  <div className="story-card-title">{story.title}</div>
                  <div className="story-card-author">by {story.author}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

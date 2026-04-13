import "./library.css";

const MY_STORIES = [
  { title: "Zara & the Dragon of Stars", chapters: 4, illustrations: 8, date: "2 days ago", emoji: "🐉", color: "from-purple/80 to-rose/60", status: "complete" },
  { title: "The Cloud Surfer", chapters: 3, illustrations: 6, date: "5 days ago", emoji: "☁️", color: "from-sky/80 to-teal/60", status: "complete" },
  { title: "Midnight Garden", chapters: 2, illustrations: 4, date: "1 week ago", emoji: "🌿", color: "from-teal/80 to-purple/40", status: "complete" },
  { title: "Robot Dance Party", chapters: 4, illustrations: 8, date: "1 week ago", emoji: "🤖", color: "from-amber/60 to-rose/60", status: "complete" },
  { title: "The Brave Little Fox", chapters: 3, illustrations: 5, date: "2 weeks ago", emoji: "🦊", color: "from-gold/80 to-amber/60", status: "complete" },
  { title: "Starship Cookies", chapters: 1, illustrations: 2, date: "Just now", emoji: "🍪", color: "from-amber/80 to-purple/40", status: "draft" },
];

export default function Library() {
  const drafts = MY_STORIES.filter((s) => s.status === "draft");
  const completed = MY_STORIES.filter((s) => s.status === "complete");

  return (
    <div className="library-page">
      <div className="library-container">
        <div className="library-header">
          <h1 className="library-title">My Library</h1>
          <p className="library-subtitle">
            {MY_STORIES.length} stories &middot;{" "}
            {MY_STORIES.reduce((a, s) => a + s.chapters, 0)} chapters
          </p>
        </div>

        {drafts.length > 0 && (
          <section className="library-section">
            <h2 className="library-section-title">Drafts</h2>
            <div className="library-grid">
              {drafts.map((story) => (
                <StoryCard key={story.title} story={story} />
              ))}
            </div>
          </section>
        )}

        <section className="library-section">
          <h2 className="library-section-title">Completed</h2>
          <div className="library-grid">
            {completed.map((story) => (
              <StoryCard key={story.title} story={story} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function StoryCard({ story }: { story: (typeof MY_STORIES)[number] }) {
  return (
    <div className="library-card">
      <div className={`library-card-cover bg-gradient-to-br ${story.color}`}>
        <span className="library-card-emoji">{story.emoji}</span>
        {story.status === "draft" && (
          <span className="library-card-badge">Draft</span>
        )}
      </div>
      <div className="library-card-info">
        <h3 className="library-card-title">{story.title}</h3>
        <p className="library-card-meta">
          {story.chapters} chapters &middot; {story.illustrations} illustrations
        </p>
        <p className="library-card-date">{story.date}</p>
      </div>
    </div>
  );
}

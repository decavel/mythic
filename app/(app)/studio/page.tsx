"use client";

import { useState } from "react";
import "./studio.css";

type Tab = "characters" | "worlds" | "stories";

const TABS: { key: Tab; label: string; icon: string }[] = [
  { key: "characters", label: "Characters", icon: "🧑‍🎤" },
  { key: "worlds", label: "Worlds", icon: "🌍" },
  { key: "stories", label: "Stories", icon: "📖" },
];

interface Character {
  name: string;
  species: string;
  role: string;
  traits: string[];
  emoji: string;
  color: string;
  description: string;
  age?: number;
}

const SPECIES_COLORS: Record<string, string> = {
  Human: "from-purple/60 to-rose/40",
  Fairy: "from-rose/40 to-lilac/60",
  Robot: "from-sky/60 to-teal/40",
  Dragon: "from-red/50 to-amber/40",
  Animal: "from-amber/60 to-gold/40",
  Alien: "from-green/50 to-sky/40",
};

const INITIAL_CHARACTERS: Character[] = [
  { name: "Zara the Brave", species: "Human", role: "Hero", traits: ["Brave", "Curious"], emoji: "🧒", color: "from-purple/60 to-rose/40", description: "A fearless young explorer from the mountain villages of Aldenmere. Zara discovered her gift for courage when she rescued her village from a raging storm at the age of eight. She carries a compass that once belonged to her grandmother and dreams of mapping every corner of the world. Despite her bravery, she has a secret fear of deep water — something she's determined to overcome on her next adventure.", age: 8 },
  { name: "Finn the Fox", species: "Animal", role: "Sidekick", traits: ["Loyal", "Clever"], emoji: "🦊", color: "from-amber/60 to-gold/40", description: "A quick-witted fox who grew up in the Whispering Woods. Finn can speak three languages and has a knack for solving riddles. He joined Zara after she freed him from a hunter's trap, and has been her most trusted companion ever since. He loves collecting shiny pebbles and telling stories by the campfire." },
  { name: "Captain Bolt", species: "Robot", role: "Mentor", traits: ["Bold", "Creative"], emoji: "🤖", color: "from-sky/60 to-teal/40", description: "An ancient robot built during the Golden Age of Invention. Captain Bolt has traveled across galaxies and mentored countless young heroes. His memory banks contain the wisdom of a thousand civilizations, though he occasionally glitches and speaks in old pirate slang. He believes every child has the spark of greatness within them." },
  { name: "Luna Starwing", species: "Fairy", role: "Hero", traits: ["Kind", "Gentle"], emoji: "🧚", color: "from-rose/40 to-lilac/60", description: "A gentle fairy born from the first light of a crescent moon. Luna's wings shimmer with stardust and she can heal small wounds with her touch. She protects the creatures of the Moonlit Meadow and sings lullabies that can calm even the fiercest beasts." },
];

interface World {
  name: string;
  biome: string;
  mood: string;
  emoji: string;
  color: string;
  description: string;
}

const BIOME_COLORS: Record<string, string> = {
  "Enchanted Forest": "from-green/50 to-teal/40",
  "Mountain Kingdom": "from-slate/50 to-sky/40",
  "Underwater Realm": "from-sky/60 to-teal/60",
  "Outer Space": "from-purple/60 to-sky/40",
  "Medieval Castle": "from-amber/60 to-purple/40",
  "Cloud City": "from-sky/40 to-white/30",
  "Volcanic Island": "from-red/50 to-amber/40",
  "Tiny World": "from-rose/40 to-green/40",
};

const INITIAL_WORLDS: World[] = [
  { name: "The Clockwork Kingdom", biome: "Medieval Castle", mood: "Mysterious", emoji: "🏰", color: "from-amber/60 to-purple/40", description: "A sprawling castle kingdom where every wall hides a gear and every hallway ticks with the rhythm of ancient clockwork. The throne room runs on a massive pendulum that also controls the drawbridge. Rumor has it the castle itself is alive — built by an inventor queen who embedded her consciousness into the machinery centuries ago. At midnight, hidden passages open and mechanical creatures patrol the corridors." },
  { name: "Deep Blue Realm", biome: "Underwater Realm", mood: "Peaceful", emoji: "🌊", color: "from-sky/60 to-teal/60", description: "A luminous underwater kingdom nestled in the deepest trench of the Sapphire Sea. Bioluminescent coral lights the streets and jellyfish lanterns float gently above the rooftops. The residents communicate through song, and the currents carry messages across the realm. Time moves slower here — a day on the surface is a week in the Deep Blue." },
  { name: "Starfall Station", biome: "Outer Space", mood: "Futuristic", emoji: "🚀", color: "from-purple/60 to-sky/40", description: "A colossal space station orbiting a binary star system at the edge of known space. Starfall Station serves as a crossroads for travelers from a hundred galaxies. Its rotating rings create artificial gravity, and the central hub houses the Grand Observatory where astronomers chart undiscovered worlds. Every cycle, shooting stars rain past the station's viewports — a phenomenon the locals call the Starfall." },
];

const TRAITS = [
  "Brave", "Curious", "Kind", "Funny", "Shy", "Bold",
  "Creative", "Loyal", "Clever", "Gentle",
];

const SPECIES = [
  { emoji: "🧒", label: "Human" },
  { emoji: "🧚", label: "Fairy" },
  { emoji: "🤖", label: "Robot" },
  { emoji: "🐉", label: "Dragon" },
  { emoji: "🦊", label: "Animal" },
  { emoji: "👽", label: "Alien" },
];

const BIOMES = [
  { emoji: "🌲", label: "Enchanted Forest" },
  { emoji: "🏔️", label: "Mountain Kingdom" },
  { emoji: "🌊", label: "Underwater Realm" },
  { emoji: "🚀", label: "Outer Space" },
  { emoji: "🏰", label: "Medieval Castle" },
  { emoji: "☁️", label: "Cloud City" },
  { emoji: "🌋", label: "Volcanic Island" },
  { emoji: "🍄", label: "Tiny World" },
];

const WORLD_MOODS = [
  "Peaceful", "Mysterious", "Dangerous", "Whimsical", "Futuristic", "Ancient",
];

export default function Studio() {
  const [tab, setTab] = useState<Tab>("characters");
  const [characters, setCharacters] = useState<Character[]>(INITIAL_CHARACTERS);
  const [worlds, setWorlds] = useState<World[]>(INITIAL_WORLDS);

  return (
    <div className="studio-page">
      <div className="studio-container">
        <div className="studio-header">
          <h1 className="studio-title">Studio</h1>
          <p className="studio-subtitle">Create the building blocks of your stories.</p>
        </div>

        {/* Tab bar */}
        <div className="studio-tabs">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`studio-tab ${tab === t.key ? "studio-tab-active" : ""}`}
              onClick={() => setTab(t.key)}
            >
              <span className="studio-tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "characters" && <CharactersTab characters={characters} setCharacters={setCharacters} />}
        {tab === "worlds" && <WorldsTab worlds={worlds} setWorlds={setWorlds} />}
        {tab === "stories" && <StoriesTab characters={characters} worlds={worlds} />}
      </div>
    </div>
  );
}

function CharactersTab({ characters, setCharacters }: { characters: Character[]; setCharacters: React.Dispatch<React.SetStateAction<Character[]>> }) {
  const [mode, setMode] = useState<"gallery" | "create" | "edit">("gallery");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [confirmingDelete, setConfirmingDelete] = useState<number | null>(null);

  // Form state
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formRole, setFormRole] = useState("");
  const [formSpecies, setFormSpecies] = useState("");
  const [formTraits, setFormTraits] = useState<string[]>([]);
  const [formDescription, setFormDescription] = useState("");

  const resetForm = () => {
    setFormName("");
    setFormAge("");
    setFormRole("");
    setFormSpecies("");
    setFormTraits([]);
    setFormDescription("");
  };

  const openCreate = () => {
    resetForm();
    setEditingIndex(null);
    setMode("create");
  };

  const openEdit = (index: number) => {
    const c = characters[index];
    setFormName(c.name);
    setFormAge(c.age != null ? String(c.age) : "");
    setFormRole(c.role);
    setFormSpecies(c.species);
    setFormTraits([...c.traits]);
    setFormDescription(c.description);
    setEditingIndex(index);
    setMode("edit");
  };

  const toggleTrait = (trait: string) => {
    setFormTraits((prev) =>
      prev.includes(trait) ? prev.filter((t) => t !== trait) : [...prev, trait]
    );
  };

  const handleSave = () => {
    const speciesEntry = SPECIES.find((s) => s.label === formSpecies);
    const emoji = speciesEntry?.emoji ?? "🧒";
    const color = SPECIES_COLORS[formSpecies] ?? "from-purple/60 to-rose/40";

    const character: Character = {
      name: formName,
      species: formSpecies,
      role: formRole,
      traits: formTraits,
      emoji,
      color,
      description: formDescription,
      ...(formAge ? { age: Number(formAge) } : {}),
    };

    if (mode === "edit" && editingIndex != null) {
      setCharacters((prev) => prev.map((c, i) => (i === editingIndex ? character : c)));
    } else {
      setCharacters((prev) => [...prev, character]);
    }
    resetForm();
    setEditingIndex(null);
    setMode("gallery");
  };

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleDelete = (index: number) => {
    setCharacters((prev) => prev.filter((_, i) => i !== index));
    setExpandedCards(new Set());
    setConfirmingDelete(null);
  };

  const isFormMode = mode === "create" || mode === "edit";

  return (
    <div className="tab-content">
      <div className="tab-intro">
        <div className="tab-intro-header">
          <div>
            <h2 className="tab-intro-title">Characters</h2>
            <p className="tab-intro-desc">
              Build heroes, sidekicks, and villains to use in your stories.
            </p>
          </div>
          <button
            className="tab-mode-btn"
            onClick={() => {
              if (isFormMode) {
                resetForm();
                setEditingIndex(null);
                setMode("gallery");
              } else {
                openCreate();
              }
            }}
          >
            {isFormMode ? "View All" : "+ New Character"}
          </button>
        </div>
      </div>

      {!isFormMode ? (
        <div className="gallery-grid">
          {characters.map((c, i) => {
            const isExpanded = expandedCards.has(i);
            return (
              <div key={i} className={`gallery-card gallery-card-character ${isExpanded ? "gallery-card-expanded" : ""}`}>
                <div className="gallery-card-top">
                  <div className={`gallery-card-avatar bg-gradient-to-br ${c.color}`}>
                    <span className="gallery-card-emoji">{c.emoji}</span>
                  </div>
                  <div className="gallery-card-body">
                    <h3 className="gallery-card-name">{c.name}</h3>
                    <div className="gallery-card-meta">{c.species} &middot; {c.role}</div>
                    <div className="gallery-card-tags">
                      {c.traits.map((t) => (
                        <span key={t} className="gallery-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="gallery-card-actions">
                    <button className="gallery-action-btn" title="Edit" onClick={() => openEdit(i)}>&#9998;</button>
                    {confirmingDelete === i ? (
                      <>
                        <button className="gallery-action-btn gallery-action-confirm" title="Confirm delete" onClick={() => handleDelete(i)}>&#10003;</button>
                        <button className="gallery-action-btn" title="Cancel" onClick={() => setConfirmingDelete(null)}>&#10005;</button>
                      </>
                    ) : (
                      <button className="gallery-action-btn gallery-action-danger" title="Delete" onClick={() => setConfirmingDelete(i)}>&times;</button>
                    )}
                  </div>
                </div>
                <div className={`gallery-card-desc-wrapper ${isExpanded ? "gallery-card-desc-expanded" : ""}`}>
                  <p className="gallery-card-desc">{c.description}</p>
                </div>
                <button
                  className={`gallery-card-expand-btn ${isExpanded ? "gallery-card-expand-btn-open" : ""}`}
                  onClick={() => toggleExpand(i)}
                  title={isExpanded ? "Collapse" : "Expand"}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            );
          })}
          <button
            className="gallery-card gallery-card-new"
            onClick={openCreate}
          >
            <div className="gallery-new-icon">+</div>
            <span className="gallery-new-label">Create a new character</span>
          </button>
        </div>
      ) : (
        <>
          {mode === "edit" && (
            <div className="studio-editing-banner">
              Editing: {characters[editingIndex!]?.name}
            </div>
          )}

          <section className="studio-section">
            <div className="studio-step-label">
              <span className="studio-step-num">1</span>
              Name &amp; basics
            </div>
            <div className="studio-input-row">
              <input
                type="text"
                placeholder="Character name"
                className="studio-input"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>
            <div className="studio-input-row" style={{ marginTop: 12 }}>
              <input
                type="number"
                placeholder="Age"
                min={1}
                max={999}
                className="studio-input studio-input-sm"
                value={formAge}
                onChange={(e) => setFormAge(e.target.value)}
              />
              <select
                className="studio-input studio-input-sm studio-select"
                value={formRole}
                onChange={(e) => setFormRole(e.target.value)}
              >
                <option value="">Role...</option>
                <option>Hero</option>
                <option>Sidekick</option>
                <option>Mentor</option>
                <option>Villain</option>
                <option>Companion</option>
              </select>
            </div>
          </section>

          <section className="studio-section">
            <div className="studio-step-label">
              <span className="studio-step-num">2</span>
              Species
            </div>
            <div className="species-grid">
              {SPECIES.map((s) => (
                <button
                  key={s.label}
                  className={`species-card ${formSpecies === s.label ? "species-card-selected" : ""}`}
                  onClick={() => setFormSpecies(s.label)}
                >
                  <span className="species-emoji">{s.emoji}</span>
                  <span className="species-label">{s.label}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="studio-section">
            <div className="studio-step-label">
              <span className="studio-step-num">3</span>
              Personality traits
            </div>
            <div className="theme-grid">
              {TRAITS.map((t) => (
                <button
                  key={t}
                  className={`theme-chip ${formTraits.includes(t) ? "theme-chip-selected" : ""}`}
                  onClick={() => toggleTrait(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </section>

          <section className="studio-section">
            <div className="studio-step-label">
              <span className="studio-step-num">4</span>
              Appearance &amp; backstory{" "}
              <span className="studio-optional">(optional)</span>
            </div>
            <textarea
              className="studio-textarea"
              placeholder="Describe how they look, what they wear, or their backstory..."
              rows={3}
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
            />
          </section>

          <div className="studio-actions">
            <button className="studio-create-btn" onClick={handleSave}>
              &#10022; {mode === "edit" ? "Update Character" : "Save Character"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function WorldsTab({ worlds, setWorlds }: { worlds: World[]; setWorlds: React.Dispatch<React.SetStateAction<World[]>> }) {
  const [mode, setMode] = useState<"gallery" | "create" | "edit">("gallery");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [confirmingDelete, setConfirmingDelete] = useState<number | null>(null);

  // Form state
  const [formName, setFormName] = useState("");
  const [formBiome, setFormBiome] = useState("");
  const [formMood, setFormMood] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const resetForm = () => {
    setFormName("");
    setFormBiome("");
    setFormMood("");
    setFormDescription("");
  };

  const openCreate = () => {
    resetForm();
    setEditingIndex(null);
    setMode("create");
  };

  const openEdit = (index: number) => {
    const w = worlds[index];
    setFormName(w.name);
    setFormBiome(w.biome);
    setFormMood(w.mood);
    setFormDescription(w.description);
    setEditingIndex(index);
    setMode("edit");
  };

  const handleSave = () => {
    const biomeEntry = BIOMES.find((b) => b.label === formBiome);
    const emoji = biomeEntry?.emoji ?? "🌍";
    const color = BIOME_COLORS[formBiome] ?? "from-purple/60 to-sky/40";

    const world: World = {
      name: formName,
      biome: formBiome,
      mood: formMood,
      emoji,
      color,
      description: formDescription,
    };

    if (mode === "edit" && editingIndex != null) {
      setWorlds((prev) => prev.map((w, i) => (i === editingIndex ? world : w)));
    } else {
      setWorlds((prev) => [...prev, world]);
    }
    resetForm();
    setEditingIndex(null);
    setMode("gallery");
  };

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleDelete = (index: number) => {
    setWorlds((prev) => prev.filter((_, i) => i !== index));
    setExpandedCards(new Set());
    setConfirmingDelete(null);
  };

  const isFormMode = mode === "create" || mode === "edit";

  return (
    <div className="tab-content">
      <div className="tab-intro">
        <div className="tab-intro-header">
          <div>
            <h2 className="tab-intro-title">Worlds</h2>
            <p className="tab-intro-desc">
              Design universes for your stories. Set the environment, rules, and
              mood — then drop any character into it.
            </p>
          </div>
          <button
            className="tab-mode-btn"
            onClick={() => {
              if (isFormMode) {
                resetForm();
                setEditingIndex(null);
                setMode("gallery");
              } else {
                openCreate();
              }
            }}
          >
            {isFormMode ? "View All" : "+ New World"}
          </button>
        </div>
      </div>

      {!isFormMode ? (
        <div className="gallery-grid">
          {worlds.map((w, i) => {
            const isExpanded = expandedCards.has(i);
            return (
              <div key={i} className={`gallery-card gallery-card-character ${isExpanded ? "gallery-card-expanded" : ""}`}>
                <div className="gallery-card-top">
                  <div className={`gallery-card-avatar bg-gradient-to-br ${w.color}`}>
                    <span className="gallery-card-emoji">{w.emoji}</span>
                  </div>
                  <div className="gallery-card-body">
                    <h3 className="gallery-card-name">{w.name}</h3>
                    <div className="gallery-card-meta">{w.biome}</div>
                    <div className="gallery-card-tags">
                      <span className="gallery-tag">{w.mood}</span>
                    </div>
                  </div>
                  <div className="gallery-card-actions">
                    <button className="gallery-action-btn" title="Edit" onClick={() => openEdit(i)}>&#9998;</button>
                    {confirmingDelete === i ? (
                      <>
                        <button className="gallery-action-btn gallery-action-confirm" title="Confirm delete" onClick={() => handleDelete(i)}>&#10003;</button>
                        <button className="gallery-action-btn" title="Cancel" onClick={() => setConfirmingDelete(null)}>&#10005;</button>
                      </>
                    ) : (
                      <button className="gallery-action-btn gallery-action-danger" title="Delete" onClick={() => setConfirmingDelete(i)}>&times;</button>
                    )}
                  </div>
                </div>
                <div className={`gallery-card-desc-wrapper ${isExpanded ? "gallery-card-desc-expanded" : ""}`}>
                  <p className="gallery-card-desc">{w.description}</p>
                </div>
                <button
                  className={`gallery-card-expand-btn ${isExpanded ? "gallery-card-expand-btn-open" : ""}`}
                  onClick={() => toggleExpand(i)}
                  title={isExpanded ? "Collapse" : "Expand"}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            );
          })}
          <button
            className="gallery-card gallery-card-new"
            onClick={openCreate}
          >
            <div className="gallery-new-icon">+</div>
            <span className="gallery-new-label">Create a new world</span>
          </button>
        </div>
      ) : (
        <>
          {mode === "edit" && (
            <div className="studio-editing-banner">
              Editing: {worlds[editingIndex!]?.name}
            </div>
          )}

          <section className="studio-section">
            <div className="studio-step-label">
              <span className="studio-step-num">1</span>
              World name
            </div>
            <input
              type="text"
              placeholder="e.g. The Clockwork Kingdom"
              className="studio-input"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
          </section>

          <section className="studio-section">
            <div className="studio-step-label">
              <span className="studio-step-num">2</span>
              Setting
            </div>
            <div className="biome-grid">
              {BIOMES.map((b) => (
                <button
                  key={b.label}
                  className={`biome-card ${formBiome === b.label ? "biome-card-selected" : ""}`}
                  onClick={() => setFormBiome(b.label)}
                >
                  <span className="biome-emoji">{b.emoji}</span>
                  <span className="biome-label">{b.label}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="studio-section">
            <div className="studio-step-label">
              <span className="studio-step-num">3</span>
              Mood
            </div>
            <div className="theme-grid">
              {WORLD_MOODS.map((m) => (
                <button
                  key={m}
                  className={`theme-chip ${formMood === m ? "theme-chip-selected" : ""}`}
                  onClick={() => setFormMood(m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </section>

          <section className="studio-section">
            <div className="studio-step-label">
              <span className="studio-step-num">4</span>
              World rules &amp; details{" "}
              <span className="studio-optional">(optional)</span>
            </div>
            <textarea
              className="studio-textarea"
              placeholder="What makes this world special? e.g. 'Gravity is reversed after sunset' or 'Animals can speak but only in rhymes'"
              rows={3}
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
            />
          </section>

          <div className="studio-actions">
            <button className="studio-create-btn" onClick={handleSave}>
              &#10022; {mode === "edit" ? "Update World" : "Save World"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const OLLAMA_URL = "http://localhost:11434";
const OLLAMA_MODEL = "llama3.2";

function buildStoryPrompt(
  selectedChars: Character[],
  selectedWorld: World | null,
  extraDetails: string,
): string {
  let prompt = `You are a creative children's story writer and illustrator director. Write an engaging, age-appropriate story based on the following elements. The story should include image annotations for illustrations.\n\n`;

  prompt += `## Characters\n`;
  for (const c of selectedChars) {
    prompt += `\n### ${c.name}\n`;
    prompt += `- Species: ${c.species}\n`;
    prompt += `- Role: ${c.role}\n`;
    if (c.age) prompt += `- Age: ${c.age}\n`;
    prompt += `- Personality traits: ${c.traits.join(", ")}\n`;
    prompt += `- Description: ${c.description}\n`;
  }

  if (selectedWorld) {
    prompt += `\n## World\n`;
    prompt += `- Name: ${selectedWorld.name}\n`;
    prompt += `- Setting: ${selectedWorld.biome}\n`;
    prompt += `- Mood: ${selectedWorld.mood}\n`;
    prompt += `- Description: ${selectedWorld.description}\n`;
  }

  if (extraDetails.trim()) {
    prompt += `\n## Additional Instructions\n${extraDetails.trim()}\n`;
  }

  prompt += `\n## Image Requirements\n`;
  prompt += `The story MUST include exactly one title image and 6 to 8 illustrations placed throughout the narrative.\n`;
  prompt += `Use the following annotation format to mark where each image should appear:\n\n`;
  prompt += `For the title image (place this at the very beginning, before the story text):\n`;
  prompt += `[TITLE_IMAGE: <detailed visual description of the title/cover illustration>]\n\n`;
  prompt += `For story illustrations (place these between paragraphs at key moments):\n`;
  prompt += `[IMAGE: <detailed visual description of what the illustration should depict>]\n\n`;
  prompt += `Each image description should be 1-2 sentences and include:\n`;
  prompt += `- Which characters are present and what they are doing\n`;
  prompt += `- The setting/environment details\n`;
  prompt += `- The mood and lighting\n`;
  prompt += `- Key visual details (colors, expressions, poses)\n`;
  prompt += `These descriptions will be used as prompts for an image generation model, so be vivid and specific.\n`;

  prompt += `\n## Writing Guidelines\n`;
  prompt += `- Write the story in a warm, engaging tone suitable for children aged 5-12.\n`;
  prompt += `- Incorporate each character's personality traits and backstory naturally.\n`;
  prompt += `- Use the world's setting and mood to create vivid, immersive scenes.\n`;
  prompt += `- Weave the lesson organically into the narrative — show, don't lecture.\n`;
  prompt += `- Include dialogue that reflects each character's personality.\n`;
  prompt += `- End with a satisfying conclusion that reinforces the lesson.\n`;
  prompt += `- Place images at natural narrative beats: the opening scene, character introductions, key turning points, the climax, and the resolution.\n`;
  prompt += `- Do NOT cluster images together — spread them evenly throughout the story.\n`;

  return prompt;
}

async function generateStory(
  prompt: string,
  onToken: (token: string) => void,
  onDone: () => void,
  onError: (error: string) => void,
): Promise<void> {
  try {
    const res = await fetch(`${OLLAMA_URL}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt,
        stream: true,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      onError(`Ollama error (${res.status}): ${text}`);
      return;
    }

    const reader = res.body?.getReader();
    if (!reader) {
      onError("No response stream available");
      return;
    }

    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const json = JSON.parse(line);
          if (json.response) onToken(json.response);
          if (json.done) {
            onDone();
            return;
          }
        } catch {
          // skip malformed lines
        }
      }
    }
    onDone();
  } catch (err) {
    onError(err instanceof Error ? err.message : "Failed to connect to Ollama");
  }
}

function StoriesTab({ characters, worlds }: { characters: Character[]; worlds: World[] }) {
  const [selectedCharIndices, setSelectedCharIndices] = useState<Set<number>>(new Set());
  const [selectedWorldIndex, setSelectedWorldIndex] = useState<number | null>(null);
  const [extraDetails, setExtraDetails] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [storyOutput, setStoryOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleCharacter = (index: number) => {
    setSelectedCharIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleCreate = () => {
    const selectedChars = Array.from(selectedCharIndices).map((i) => characters[i]);
    const selectedWorld = selectedWorldIndex != null ? worlds[selectedWorldIndex] : null;
    const prompt = buildStoryPrompt(selectedChars, selectedWorld, extraDetails);
    setGeneratedPrompt(prompt);
    setStoryOutput("");
    setError(null);
    setIsGenerating(true);

    generateStory(
      prompt,
      (token) => setStoryOutput((prev) => prev + token),
      () => setIsGenerating(false),
      (err) => {
        setError(err);
        setIsGenerating(false);
      },
    );
  };

  const canCreate = selectedCharIndices.size > 0 && selectedWorldIndex != null && !isGenerating;

  return (
    <div className="tab-content">
      <div className="tab-intro">
        <h2 className="tab-intro-title">Create a Story</h2>
        <p className="tab-intro-desc">
          Combine your characters and worlds into an adventure. Pick the pieces,
          add a theme, and let Mythic write the rest.
        </p>
      </div>

      <section className="studio-section">
        <div className="studio-step-label">
          <span className="studio-step-num">1</span>
          Pick characters <span className="studio-optional">(select one or more)</span>
        </div>
        {characters.length > 0 ? (
          <div className="saved-picker">
            {characters.map((c, i) => (
              <button
                key={i}
                className={`saved-item ${selectedCharIndices.has(i) ? "saved-item-selected" : ""}`}
                onClick={() => toggleCharacter(i)}
              >
                <div className="saved-icon">{c.emoji}</div>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        ) : (
          <p className="studio-empty-hint">No characters yet. Create one in the Characters tab.</p>
        )}
      </section>

      <section className="studio-section">
        <div className="studio-step-label">
          <span className="studio-step-num">2</span>
          Pick a world
        </div>
        {worlds.length > 0 ? (
          <div className="saved-picker">
            {worlds.map((w, i) => (
              <button
                key={i}
                className={`saved-item ${selectedWorldIndex === i ? "saved-item-selected" : ""}`}
                onClick={() => setSelectedWorldIndex(selectedWorldIndex === i ? null : i)}
              >
                <div className="saved-icon">{w.emoji}</div>
                <span>{w.name}</span>
              </button>
            ))}
          </div>
        ) : (
          <p className="studio-empty-hint">No worlds yet. Create one in the Worlds tab.</p>
        )}
      </section>

      <section className="studio-section">
        <div className="studio-step-label">
          <span className="studio-step-num">3</span>
          Extra details{" "}
          <span className="studio-optional">(optional)</span>
        </div>
        <textarea
          className="studio-textarea"
          placeholder="Anything else? e.g. 'Make it a mystery' or 'Add a plot twist at the end'"
          rows={3}
          value={extraDetails}
          onChange={(e) => setExtraDetails(e.target.value)}
        />
      </section>

      <div className="studio-actions">
        <button
          className={`studio-create-btn ${!canCreate ? "studio-create-btn-disabled" : ""}`}
          onClick={handleCreate}
          disabled={!canCreate}
        >
          {isGenerating ? "Generating..." : "\u2726 Create My Story"}
        </button>
      </div>

      {error && (
        <div className="studio-error-banner">
          {error}
        </div>
      )}

      {(storyOutput || isGenerating) && (
        <div className="studio-story-output">
          <div className="studio-prompt-header">
            <span className="studio-prompt-title">
              {isGenerating ? "Writing your story..." : "Your Story"}
            </span>
            {!isGenerating && (
              <button className="studio-prompt-close" onClick={() => setStoryOutput("")}>&times;</button>
            )}
          </div>
          <div className="studio-story-body">
            {storyOutput || <span className="studio-story-placeholder">Waiting for first words...</span>}
            {isGenerating && <span className="studio-cursor">|</span>}
          </div>
        </div>
      )}

      {generatedPrompt && !storyOutput && !isGenerating && (
        <div className="studio-prompt-preview">
          <div className="studio-prompt-header">
            <span className="studio-prompt-title">Generated Prompt</span>
            <button className="studio-prompt-close" onClick={() => setGeneratedPrompt(null)}>&times;</button>
          </div>
          <pre className="studio-prompt-body">{generatedPrompt}</pre>
        </div>
      )}
    </div>
  );
}

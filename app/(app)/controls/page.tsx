"use client";

import { useState } from "react";
import "./controls.css";

const INITIAL_THEME_CONTROLS = [
  { label: "Kindness", enabled: true },
  { label: "Courage", enabled: true },
  { label: "Curiosity", enabled: true },
  { label: "Friendship", enabled: true },
  { label: "Honesty", enabled: false },
  { label: "Teamwork", enabled: false },
];

const BLOCKED_THEMES = ["Scary content", "Violence", "Conflict"];

const ANALYTICS = {
  storiesThisWeek: 6,
  storiesTotal: 23,
  avgPerDay: 1.2,
  topThemes: [
    { label: "Courage", count: 12, pct: 52 },
    { label: "Kindness", count: 8, pct: 35 },
    { label: "Curiosity", count: 6, pct: 26 },
    { label: "Friendship", count: 5, pct: 22 },
  ],
  recentActivity: [
    { title: "Starship Cookies", date: "Today", type: "Started" },
    { title: "Robot Dance Party", date: "3 days ago", type: "Completed" },
    { title: "The Brave Little Fox", date: "5 days ago", type: "Completed" },
    { title: "Midnight Garden", date: "1 week ago", type: "Completed" },
  ],
};

export default function Controls() {
  const [themeControls, setThemeControls] = useState(INITIAL_THEME_CONTROLS);
  const [publicSharing, setPublicSharing] = useState(false);
  const [storyReview, setStoryReview] = useState(true);

  const toggleTheme = (index: number) => {
    setThemeControls((prev) =>
      prev.map((t, i) => (i === index ? { ...t, enabled: !t.enabled } : t))
    );
  };

  return (
    <div className="controls-page">
      <div className="controls-container">
        <div className="controls-header">
          <h1 className="controls-title">Parental Controls</h1>
          <p className="controls-subtitle">
            Manage themes, content settings, and view activity for your child&apos;s account.
          </p>
        </div>

        <div className="controls-grid">
          {/* Left column: Controls */}
          <div className="controls-col">
            {/* Promoted Themes */}
            <section className="controls-card">
              <h2 className="controls-card-title">Promoted Themes</h2>
              <p className="controls-card-desc">
                These values will be woven into every story your child creates.
              </p>
              <div className="controls-toggles">
                {themeControls.map((theme, i) => (
                  <div key={theme.label} className="controls-toggle-row">
                    <span className="controls-toggle-label">{theme.label}</span>
                    <button
                      className={theme.enabled ? "ctrl-toggle-on" : "ctrl-toggle-off"}
                      onClick={() => toggleTheme(i)}
                    >
                      <div className="ctrl-toggle-knob" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Blocked Themes */}
            <section className="controls-card">
              <h2 className="controls-card-title">Blocked Themes</h2>
              <p className="controls-card-desc">
                Stories will avoid these topics entirely.
              </p>
              <div className="blocked-tags">
                {BLOCKED_THEMES.map((t) => (
                  <span key={t} className="blocked-tag">
                    {t} <span className="blocked-x">&times;</span>
                  </span>
                ))}
                <button className="blocked-add">+ Add</button>
              </div>
            </section>

            {/* Settings */}
            <section className="controls-card">
              <h2 className="controls-card-title">Settings</h2>
              <div className="controls-toggles">
                <div className="controls-toggle-row">
                  <span className="controls-toggle-label">Public sharing</span>
                  <button
                    className={publicSharing ? "ctrl-toggle-on" : "ctrl-toggle-off"}
                    onClick={() => setPublicSharing(!publicSharing)}
                  >
                    <div className="ctrl-toggle-knob" />
                  </button>
                </div>
                <div className="controls-toggle-row">
                  <span className="controls-toggle-label">Daily time limit</span>
                  <span className="controls-toggle-value">45 min</span>
                </div>
                <div className="controls-toggle-row">
                  <span className="controls-toggle-label">Story review required</span>
                  <button
                    className={storyReview ? "ctrl-toggle-on" : "ctrl-toggle-off"}
                    onClick={() => setStoryReview(!storyReview)}
                  >
                    <div className="ctrl-toggle-knob" />
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right column: Analytics */}
          <div className="controls-col">
            {/* Stats summary */}
            <section className="controls-card">
              <h2 className="controls-card-title">Activity Overview</h2>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-box-num">{ANALYTICS.storiesThisWeek}</div>
                  <div className="stat-box-label">This week</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box-num">{ANALYTICS.storiesTotal}</div>
                  <div className="stat-box-label">Total stories</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box-num">{ANALYTICS.avgPerDay}</div>
                  <div className="stat-box-label">Avg/day</div>
                </div>
              </div>
            </section>

            {/* Theme distribution */}
            <section className="controls-card">
              <h2 className="controls-card-title">Theme Distribution</h2>
              <p className="controls-card-desc">
                How often each promoted theme appeared in stories.
              </p>
              <div className="theme-bars">
                {ANALYTICS.topThemes.map((theme) => (
                  <div key={theme.label} className="theme-bar-row">
                    <div className="theme-bar-header">
                      <span className="theme-bar-label">{theme.label}</span>
                      <span className="theme-bar-count">{theme.count} stories</span>
                    </div>
                    <div className="theme-bar-track">
                      <div
                        className="theme-bar-fill"
                        style={{ width: `${theme.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent activity */}
            <section className="controls-card">
              <h2 className="controls-card-title">Recent Activity</h2>
              <div className="activity-list">
                {ANALYTICS.recentActivity.map((item) => (
                  <div key={item.title} className="activity-row">
                    <div>
                      <div className="activity-title">{item.title}</div>
                      <div className="activity-date">{item.date}</div>
                    </div>
                    <span className={`activity-badge ${item.type === "Started" ? "activity-badge-draft" : "activity-badge-done"}`}>
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

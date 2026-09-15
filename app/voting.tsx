"use client";

import { useState } from "react";
import Image from "next/image";

const contestants = [
  { id: "fl-miss", state: "Florida", division: "Miss", name: "Jasmen Bogere", age: 16 },
  { id: "fl-little", state: "Florida", division: "Little Miss", name: "Teylyn Prater-Fulliere", age: 9 },
  { id: "fl-junior", state: "Florida", division: "Jr. Miss", name: "Syerra Thigpen", age: 11 },
  { id: "de-miss", state: "Delaware", division: "Miss", name: "Lihlo Hollins", age: 16 },
  { id: "il-miss", state: "Illinois", division: "Miss", name: null, age: null },
  { id: "il-little", state: "Illinois", division: "Little Miss", name: null, age: null },
  { id: "il-junior", state: "Illinois", division: "Jr. Miss", name: null, age: null },
].sort((a, b) => {
  if (!a.name) return b.name ? 1 : 0;
  if (!b.name) return -1;
  return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
});

const packages = [{ votes: 1, price: 5 }, { votes: 3, price: 10 }];

export default function Voting() {
  const [selectedId, setSelectedId] = useState("");
  const [voteCount, setVoteCount] = useState(1);
  const contestant = contestants.find((entry) => entry.id === selectedId);
  const votePackage = packages.find((entry) => entry.votes === voteCount)!;

  return (
    <section className="voting" id="vote" aria-labelledby="voting-title">
      <div className="voting-heading">
        <div>
          <p className="kicker">2026 contestant voting</p>
          <h2 id="voting-title">Celebrate her.<br /><em>Champion her.</em></h2>
        </div>
        <div className="voting-intro">
          <p>Show your support for our Miss Juneteenth USA contestants. Choose a contestant and a vote package below.</p>
          <span className="voting-status">Voting opens soon</span>
        </div>
      </div>
      <div className="voting-layout">
        <fieldset className="contestant-fieldset">
          <legend>1. Choose your contestant</legend>
          <div className="contestant-grid">
            {contestants.map((entry) => (
              <label className={`contestant-card${selectedId === entry.id ? " selected" : ""}${!entry.name ? " pending" : ""}`} key={entry.id}>
                <input type="radio" name="contestant" value={entry.id} checked={selectedId === entry.id} onChange={() => setSelectedId(entry.id)} disabled={!entry.name} />
                <span className="contestant-state">{entry.state} <span>2026</span></span>
                <span className="contestant-identity">
                  <span className="contestant-crown" aria-hidden="true">
                    <Image src="/media/mjusa-logo-transparent.png" alt="" width={1428} height={1100} unoptimized />
                  </span>
                  <span className="contestant-name">{entry.name ?? ""}</span>
                </span>
                <span className="contestant-title">{entry.division} Juneteenth {entry.state} USA 2026</span>
                <span className="contestant-age">{entry.age ? `${entry.age} years old` : ""}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="vote-summary">
          <fieldset className="package-fieldset">
            <legend>2. Choose your vote package</legend>
            {packages.map((entry) => (
              <label className={`vote-package${voteCount === entry.votes ? " selected" : ""}`} key={entry.votes}>
                <input type="radio" name="vote-package" value={entry.votes} checked={voteCount === entry.votes} onChange={() => setVoteCount(entry.votes)} />
                <span>{entry.votes} {entry.votes === 1 ? "vote" : "votes"}{entry.votes === 3 && <small>Best value</small>}</span>
                <strong>${entry.price}</strong>
              </label>
            ))}
          </fieldset>
          <div className="vote-receipt" aria-live="polite" aria-atomic="true">
            <span>Your selection</span>
            <h3>{contestant?.name ?? "Choose a contestant"}</h3>
            {contestant && <p>{contestant.division} · {contestant.state}</p>}
            <div><span>{votePackage.votes} {votePackage.votes === 1 ? "vote" : "votes"}</span><strong>${votePackage.price}.00</strong></div>
          </div>
          <button className="vote-checkout" type="button" disabled aria-describedby="voting-availability">Voting opens soon</button>
          <p className="voting-note" id="voting-availability">Payments are not available yet. Selecting a contestant does not cast a vote. When voting opens, votes will count only after payment is confirmed.</p>
        </div>
      </div>
    </section>
  );
}

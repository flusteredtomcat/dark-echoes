import { episodes } from "./data";
import { useState } from "react";

export default function App() {
  const [episodeList] = useState(episodes);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeList() {
    return (
      <section className="episodes">
        <ul>
          {episodeList.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function EpisodeDescription() {
    if (!selectedEpisode) {
      return (
        <section>
          <h2>Episode Description</h2>
          <p>Please select an episode to learn more!</p>
        </section>
      );
    }

    return (
      <section>
        <h2>Episode Description</h2>
        <p>{selectedEpisode.name}</p>
        <p>{selectedEpisode.description}</p>
        <button>Watch Now</button>
      </section>
    );
  }

  return (
    // TODO
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        {/* Add episode list component here*/}
        <EpisodeList />
        {/* Add episode detail component here*/}
        <EpisodeDescription />
      </main>
    </>
  );
}

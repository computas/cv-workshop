import { useState } from "react";
import styles from "./Experiences.module.css";
import { ExperienceCard } from "../components/experiences/ExperienceCard";
import { CxOption, CxSelect } from "@computas/designsystem/select/react";

import { experienceTypeMap } from "../types/experienceTypes";
import { useExperiences } from "../hooks/useExperiences";

export default function Experiences() {
  const [selectedExperienceType, setSelectedExperienceType] = useState<
    string | null
  >(null);

  // TODO Oppgave 1.1 of 1.2: Håndter loading og error av erfaringer
  const { data: experiences, isLoading, error } = useExperiences();

  if (isLoading) {
    return <div className={styles.loading}>Loading experiences...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        Failed to load experiences. Please try again later.
      </div>
    );
  }

  if (!experiences || experiences.length === 0) {
    return <div className={styles.noExperiences}>No experiences found.</div>;
  }

  const handleSelectChange = (e: Event) => {
    const customEvent = e as CustomEvent;
    // TODO Oppgave 5.1: Filtrer experiences etter type
    setSelectedExperienceType(customEvent.detail.value || null);
  };

  const filteredExperiences = () => {
    const validTypes = Object.keys(experienceTypeMap).filter(
      (type) => type !== "other",
    );

    if (selectedExperienceType === "other") {
      return experiences.filter(
        (experience) => !validTypes.includes(experience.type.toLowerCase()),
      );
    } else if (selectedExperienceType) {
      return experiences.filter(
        (experience) =>
          experience.type.toLowerCase() ===
          selectedExperienceType.toLowerCase(),
      );
    }
    return experiences;
  };

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <label className="cx-form-field">
          <div className="cx-form-field__input-container">
            <CxSelect onChange={handleSelectChange}>
              <CxOption value="">Ingen filtrering</CxOption>
              {Object.entries(experienceTypeMap).map(([type, data]) => (
                <CxOption key={type} value={type}>
                  {data.text}
                </CxOption>
              ))}
            </CxSelect>
          </div>
        </label>
      </div>
      <div className={styles.experiences}>
        {/*TODO Oppgave 3.1, 3.2, 4.1: Vis og sorter alle erfaringene. */}
        {filteredExperiences()
          .sort((a, b) => {
            return (
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
            );
          })
          .map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
      </div>
      {filteredExperiences().length === 0 && (
        <div className={styles.noExperiences}>Ingen erfaringer funnet</div>
      )}
    </div>
  );
}

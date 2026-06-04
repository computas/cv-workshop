import { useState } from "react";
import styles from "./Experiences.module.css";
import { CxOption, CxSelect } from "@computas/designsystem/select/react";
import { experienceTypeMap } from "../types/experienceTypes";
import { useExperiences } from "../hooks/useExperiences";

export default function Experiences() {
  const [selectedExperienceType, setSelectedExperienceType] = useState<
    string | null
  >(null);

  // TODO Oppgave 1.1 of 1.2: Håndter loading og error av erfaringer
  const { data: experiences } = useExperiences();

  if (!experiences || experiences.length === 0) {
    return <div className={styles.noExperiences}>No experiences found.</div>;
  }

  const handleSelectChange = (e: Event) => {
    const customEvent = e as CustomEvent;
    const selectedFilter = customEvent.detail.value;
    console.log(selectedFilter);
    // TODO Oppgave 5.1: Filtrer experiences etter type
  };

  // const filteredExperiences = () => {
  //   const validTypes = Object.keys(experienceTypeMap).filter(
  //     (type) => type !== "other",
  //   );

  //   if (selectedExperienceType === "other") {
  //     return experiences.filter(
  //       (experience) => !validTypes.includes(experience.type.toLowerCase()),
  //     );
  //   } else if (selectedExperienceType) {
  //     return experiences.filter(
  //       (experience) =>
  //         experience.type.toLowerCase() ===
  //         selectedExperienceType.toLowerCase(),
  //     );
  //   }
  //   return experiences;
  // };

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
      </div>
    </div>
  );
}

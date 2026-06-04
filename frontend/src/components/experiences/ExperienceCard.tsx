import { Experience } from "../../types/types";
import { formatMonthYear } from "../../utils/formatMonthYear";
import styles from "./ExperienceCard.module.css";
import akersgataImage from "../../assets/akersgata.jpg";
import { CxIcon } from "@computas/designsystem/icon/react";
import { ExperienceChip } from "./ExperienceChip";

interface ExperienceCardProps {
  experience: Experience;
  onClick?: () => void;
}

export function ExperienceCard({ experience, onClick }: ExperienceCardProps) {
  return (
    <div
      className={`${styles.container} ${onClick ? styles.clickable : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      <img
        className={styles.image}
        src={experience.imageUrl || akersgataImage}
        alt={experience.title}
      />
      <div className={styles.chip}>
        <ExperienceChip type={experience.type} />
      </div>
      <div className={styles.info}>
        <p className={styles.keyInfo}>
          <CxIcon name="calendar" size="4" />{" "}
          {experience.startDate && formatMonthYear(experience.startDate)} -{" "}
          {experience.endDate ? formatMonthYear(experience.endDate) : "d.d"}
        </p>
        <p className={styles.keyInfo}>
          <CxIcon name="location" size="4" />{" "}
          {/* TODO Oppgave 6.1: Conditional rendering*/}
          {experience.company ? experience.company : "Selvstendig arbeid"}
        </p>
        <p className={styles.eventTitle}>{experience.title}</p>
      </div>
    </div>
  );
}

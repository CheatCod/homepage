export interface ExperienceDate {
    start: string,
    end?: string
}

export type ExperienceType = "work" | "education" | "volunteer" | "project" | "other";

export interface ExperienceEntryData {
    date: ExperienceDate,
    title: string,
    organization: string,
    link?: string,
    description: string,
    type: ExperienceType,
    tags: string[]
}

// an example of this object:

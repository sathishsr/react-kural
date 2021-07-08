import { Chapters, SectionDetail } from "./Details";

export interface Menu {
    name: string
    transliteration:string
    translation: string
    number: number
    chapter: SectionDetail[] | undefined
}
import { Skill } from '../skill'

export interface Language extends Skill {
  /**
   * Path of markdown file used for details, `assets/languages/` should be prepended to this.
   * @example "markdownFile.md"
   */
  markdown?: string;
  /**
   * Some sample code to display next to description, `assets/languages/` should be prepended to this.
   * @example "markdownFile.eg.md"
   */
  exampleMarkdown?: string;
}

export interface LanguageSection extends Skill {
  section: {
    name: string;
    languages: Language[];
  }
}

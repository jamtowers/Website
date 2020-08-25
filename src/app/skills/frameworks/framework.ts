import { Skill } from '../skill'

export interface Framework extends Skill {
  /**
   * Path of markdown file used for details, `assets/frameworks/` should be prepended to this.
   * @example "markdownFile.md"
   */
  markdown?: string;
}

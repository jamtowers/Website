export interface Skill {
  /**
   * Name of Skill.
   */
  name: string;

  /**
   * How experience you are with this Skill, goes from 1 to 10
   */
  competency: number;
  
  /**
   * Url to page relevant to skill
   * @example "https://angular.io/"
   */
  url?: string;

  /**
   * Related skills with links to other page
   */
  related?: {
    /**
     * name to display on link
     * @example "Cool Skill"
     */
    name: string;

    /**
     * path to related skill
     * @example "skills/test"
     */
    path: string;

    /**
     * Fragment to use with path
     * @example "section"
     */
    fragment: string;
  }[];
}

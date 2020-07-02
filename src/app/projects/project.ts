export interface Project {
  /**
   * Name of Project.
   */
  name: string;
  /**
   * Type of Project.
   * @example "Web App"
   */
  type: string;
  /**
   * Date Project was added.
   * @example "29/06/2020"
   */
  dateAdded: string;
  /**
   * Date Project was last updated.
   * @example "29/06/2020"
   */
  dateUpdated?: string;
  /**
   * Short description shown on projects page.
   * @example "This project isn't maintained anymore, but most of the code is still solid."
   */
  description: string;
  /**
   * Name of the image used on the projects page, any time this is loaded `assets/images/` should be prepended to the image path.
   * @example "Image name"
   */
  imagePath?: string;
  /**
   * GitHub path for project, `github.com/` should be prepended to this value.
   * @example "jamtowers/Website"
   */
  gitHubPath?: string;
  /**
   * Name of markdown file used on Project Details page, `projects/` should be prepended to this value.
   * @example "markdownFile.md"
   */
  markdown: string;
}

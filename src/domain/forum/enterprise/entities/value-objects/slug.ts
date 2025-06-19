export class Slug {
  public value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string) {
    return new Slug(value);
  }

  /**
   * Receives a string and normalize it as a slug.
   *
   * Example: "An example title" => "an-example-title"
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize("NFKD") //normalize and remove anyware not unicode simbol ex ~ ^ ´
      .toLowerCase() //to lower case
      .trim() //remove spaces in the rigth and left
      .replace(/\s+/g, "-") //replace whites spaces
      .replace(/[^\w-]+/g, "") //replace non words
      .replace(/_/g, "-") //remove any underline and replace by "-"
      .replace(/--+/g, "-") //replace two or more "--" for one "-"
      .replace(/-$/g, ""); //replace the final of string

    return new Slug(slugText);
  }
}

/**
 * Represents a JSON parser that reads and parses JSON files.
 */
class JsonParser {
  /**
   * Creates a new instance of the JsonParser class.
   * @param {string} filePath - The path to the JSON file.
   */
  constructor(filePath){
    this.filePath = filePath;
  }

  /**
   * Validates if the file extension is '.json'.
   * @returns {boolean} - True if the file extension is '.json', false otherwise.
   */
  validateFileExtension() {
    return this.filePath.endsWith('.json');
  }

  /**
   * Reads the JSON file and returns its content.
   * @throws {Error} - If the file extension is not '.json'.
   * @returns {object} - The parsed JSON object.
   */
  read() {
    if (!this.validateFileExtension()) {
      throw new Error('File must be a JSON file');
    }

    return require(this.filePath);
  }

  /**
   * Parses the JSON file and returns the parsed JSON object.
   * @returns {object} - The parsed JSON object.
   */
  parse() {
    const json = this.read();
    return json;
  }

  /**
   * Prints the parsed JSON object to the console.
   */
  print() {
    const json = this.parse();
    console.log(json);
  }
}

// Example usage
const jsonParser = new JsonParser('./my-json.json');
const key = jsonParser.parse().key;

console.log(key);
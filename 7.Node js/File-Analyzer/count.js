const fs = require("fs");
const path = require("path");

//! check line argument
const args = process.argv.slice(2);

//! help message
function showHelp() {
  console.log("Text File Analyzer");
  console.log("Usage:node count.js <file.txt> [options]");
  console.log("\nOptions");
  console.log(" -h, --help show help");
  console.log(" -s, --summary show only summary(total counts)");
  console.log(" -d, --detail show detailed statistics");
  console.log("\nExample");
  console.log("node count.js sample.txt");
  console.log("node count.js sample.txt --detail");
  process.exit(0);
}

//!show help if no arrguments or help flag
if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  showHelp();
}

//pass command line options
const filepath = args[0];
const showDetail = args.includes("--detail") || args.includes("-d");

//validates the file path
if (!filepath.endsWith(".txt")) {
  console.log("Error : please provide a.txt file");
process.exit(1);
}
//check if file exists
if (!fs.existsSync(filepath)) {
  console.log(`Error : file ${filepath} does not exist`);
  process.exit(1);
}
//read file content
function readfile(filepath) {
  try {
    //read file buffer for more accurate characters counting
   const buffer = fs.readFileSync(filepath);
    return buffer;
  } catch (error) {
    console.log(`error reading file ${error.message}`);
    process.exit(1);
  }
}
//count statistics
function countStatistics(buffer) {
  //! convert buffer to string for text analysis
  const content = buffer.toString();
  //! count character (including whitespace)
  const charcount = buffer.length;
  //! count line (splite by newlines characters)
  const lines = content.split(/\r?\n/);
  const linecount = lines.length;
  //! count words (split by whitespace)
  const words = content.split(/\s+/).filter((word) => word.length > 0);
  const wordcount = words.length;
  //! get bytes size
  const byteSize = buffer.byteLength;
  //! additional statistics for detailed output
  let stats = {
    charcount,
    linecount,
    wordcount,
    byteSize,
  };
  if (showDetail) {
    //! count non-whitespace characters
    const nonwhitespaceCharCount = content.replace(/\s/g, "").length;
    //! word length distributions
    const wordLength = words.map((word) => word.length);
    const averagewordLength =
      wordLength.reduce((sum, length) => sum + length, 0) / wordcount || 0;
    //! count paragraph (separated by double newline)
    const paragraphCount = content
      .split(/\r?\n\s*\r?\n/)
      .filter((para) => para.trim().length > 0).length;

    //find most common words
    const wordFrequency = {};
    words.forEach((word) => {
      const normalizedWord = word.toLowerCase().replace(/[^\w]/g, "");
      if (normalizedWord.length > 0) {
        wordFrequency[normalizedWord] =
          (wordFrequency[normalizedWord] || 0) + 1;
      }
    });
    const sortedwords = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0.10);
    //add statistics
    stats = {
      ...stats,
      nonwhitespaceCharCount,
      averagewordLength,
      paragraphCount,
      commonWords: sortedwords,
    };
  }
  return stats;
}

//formate bytes size to human readable formate
function formatBytes(bytes, decimal = 2) {
  if (bytes === 0) return "0 bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat(bytes / Math.pow(k, i)).toFixed(decimal) + " " + sizes[i];
}
//display the statistics
function displaystatistics(stats) {
  console.log("\n===Text file statistics ===\n");
  //always show basic statistics
  console.log(`file:${path.basename(filepath)}`);
  console.log(`size:${formatBytes(stats.byteSize)}`);
  console.log(`characters:${stats.charcount}`);
  console.log(`words:${stats.wordcount}`);
  console.log(`lines:${stats.linecount}`);
  if (showDetail) {
    console.log("\n===Detailed statistics ===\n");
    console.log(`non-whitespace characters:${stats.nonwhitespaceCharCount}`);
    console.log(`paragraph:${stats.paragraphCount}`);
    console.log(
      `Average word length :${stats.averagewordLength.toFixed(2)}characters`,
    );
    console.log("\n=Most common words:");
    stats.commonWords.forEach(([word, count]) => {
      console.log(`"${word}":${count} occurences`);
    });
  }
  console.log("\n===end of statistics ===");
}
//Main execution
const buffer = readfile(filepath);
const statistics = countStatistics(buffer);
displaystatistics(statistics);

function countSentence(sentence) {
    // Initialize counters
    let length = 0;
    let numWords = 0;
    let numVowels = 0;

    // Define vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Iterate through each character in the sentence
    for (let char of sentence) {
        // Increment character count
        length++;

        // Check if the character is a letter (word separator)
        if (char === ' ') {
            numWords++;
        }

        // Check if the character is a vowel
        if (vowels.has(char.toLowerCase())) {
            numVowels++;
        }
    }

    // Increment word count for the last word (since there's no space after it)
    numWords++;

    return [length, numWords, numVowels];
}

// Test the function
const sentence = "This is a sample sentence.";
const [length, numWords, numVowels] = countSentence(sentence);
console.log("Length of the sentence:", length);
console.log("Number of words:", numWords);
console.log("Number of vowels:", numVowels);

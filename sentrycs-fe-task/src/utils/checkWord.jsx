// Uses a free dictionary API to check if word exists
export async function checkWordExists(word) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
  );
  return response.ok;
}

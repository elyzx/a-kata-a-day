// Return substring instance count
// Complete the solution so that it returns the number of times the search_text is found within the full_text.

const solution = (fullText, searchText) => fullText.split(searchText).length - 1;

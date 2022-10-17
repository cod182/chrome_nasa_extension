// This function inserts our autoSearch function into the page's code
function insertScript() {
  // This selects the focused tab for the operation and passes the autoSearch function
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, function: autoSearch })
  })

  // This closes the extension pop-up to select the website search bar
  window.close();
}

// This is an event listener that detects clicks on our "Start Random Search" button
document.getElementById('buttonTwo').addEventListener('click', insertScript)

// This function selects a random topic from an array and 
function autoSearch() {
  // This is an array to store our search terms
  const searchTerms = ["PC and Mobile", "Lifestyle", "Hardware", "Windows", "Mac",
    "Linux", "Android", "Apple", "Internet", "Security",
    "Programming", "Entertainment", "Productivity", "Career", "Creative",
    "Gaming", "Social Media", "Smart Home", "DIY", "Review"];

  // This generates a random number between 0 and 19
  let selectorNumber = Math.floor(Math.random() * 20);

  // This uses the random number to select an entry from the array
  let selection = searchTerms[selectorNumber];

  // This simulates a click on the MUO website search icon
  document.getElementById("js-search").click();

  // This sets the MUO website search bar as a variable
  var searchBar = document.getElementById("js-search-input");

  // This inserts our random search term into the search bar
  searchBar.value = searchBar.value + selection;

  // This finishes the process by activating the website form
  document.getElementById("searchform2").submit();
}
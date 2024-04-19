/**
 * Fetches a random quote from the local array of quotes and displays it on the page.
 */
function getLocalQuote() {
    /**
     * An array of quotes with their respective authors.
     * @type {Array}
     */
    var localQuotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "In the end, it's not the years in your life that count. It's the life in your years.",
            author: "Abraham Lincoln"
        },
        {
            text: "You only live once, but if you do it right, once is enough.",
            author: "Mae West"
        },
        {
            text: "Mapema ndio best.",
            author: "Mahatma Ganthi"
        }
    ];

    /**
     * Generates a random index within the localQuotes array.
     * @type {Number}
     */
    var randomIndex = Math.floor(Math.random() * localQuotes.length);

    /**
     * Stores the quote object at the random index.
     * @type {Object}
     */
    var randomQuote = localQuotes[randomIndex];

    /**
     * Sets the quote text to the innerHTML of the element with id "quote".
     * @param {String} text - The text of the quote.
     */
    function setQuoteText(text) {
        document.getElementById("quote").innerHTML = text;
    }

    /**
     * Sets the source text to the innerHTML of the element with id "source".
     * @param {String} source - The source text of the quote.
     */
    function setSourceText(source) {
        document.getElementById("source").innerHTML = "- " + source;
    }

    /**
     * Displays an author image next to the quote based on the provided name.
     * @param {String} authorName - The name of the author for which to search for an image.
     */
    function displayAuthorImage(authorName) {
        // ... (implementation omitted for brevity)
    }

    /**
     * Sets the author image source to the image URL.
     * @param {String} imageUrl - The URL of the author image.
     */
    function setAuthorImageSource(imageUrl) {
        document.getElementById("author-image").src = imageUrl;
    }

    // Set the quote text and source text.
    setQuoteText(randomQuote.text);
    setSourceText(randomQuote.author);

    // Display the author image.
    displayAuthorImage(randomQuote.author);
}
/**
 * Fetches a random quote from the Quotable API and displays it on the page.
 */
function getAPIQuote() {
  fetch("https://api.quotable.io/random")
   .then(response => response.json())
   .then(data => {
      /**
       * Sets the quote text to the response content and the source to the response author.
       * @param {object} data - The response data from the API.
       */
      document.getElementById("quote").innerHTML = data.content;
      document.getElementById("source").innerHTML = `- ${data.author}`;

      displayAuthorImage(data.author);
    })
   .catch(error => {
      console.log("Error fetching quote:", error);
    });
}

/**
 * Displays an author image next to the quote based on the provided name.
 * @param {string} authorName - The name of the author for which to search for an image.
 */
function displayAuthorImage(authorName) {
  fetch(`https://api.unsplash.com/search/photos?query=${authorName}&client_id=a5rghFudNyIiu2pUxo5Y2GkpRKJ1VNynA_swDphObL4`)
   .then(response => response.json())
   .then(data => {
      /**
       * If there are results, sets the author image to the first regular size image URL.
       * @param {object} data - The response data from the Unsplash API.
       */
      if (data.results.length > 0) {
        var imageUrl = data.results[0].urls.regular;
        document.getElementById("author-image").src = imageUrl;
      } else {
        console.log("No image found for the author:", authorName);
      }
    })
   .catch(error => {
      console.log("Error fetching image:", error);
    });
}

/**
 * Displays an author image next to the quote based on the provided name.
 * @param {string} authorName - The name of the author for which to search for an image.
 */
function displayAuthorImage(authorName) {
    /**
     * Fetches an image from the Unsplash API using the provided author name.
     * @param {string} authorName - The name of the author for which to search for an image.
     * @returns {Promise} A promise that resolves to the image URL if found, or rejects with an error if not found.
     */
    return fetch(`https://api.unsplash.com/search/photos?query=${authorName}&client_id=a5rghFudNyIiu2pUxo5Y2GkpRKJ1VNynA_swDphObL4`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                var imageUrl = data.results[0].urls.regular;
                document.getElementById("author-image").src = imageUrl;
            } else {
                console.log("No image found for the author:", authorName);
            }
        })
        .catch(error => {
            console.log("Error fetching image:", error);
        });
}


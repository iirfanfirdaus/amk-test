function debounce(func, wait) {
  let timeout;

  return function(...args) {
      const context = this;

      // Clear the previous timeout
      clearTimeout(timeout);

      // Set a new timeout
      timeout = setTimeout(() => {
          func.apply(context, args);
      }, wait);
  };
}

// Example usage:
const logMessage = (message) => {
  console.log(message);
};

const debouncedLog = debounce(logMessage, 2000);

// Calling the debounced function multiple times
debouncedLog("Hello, World!"); // This will not log immediately
debouncedLog("Hello again!");    // This will reset the timer
debouncedLog("Last message");     // This will reset the timer again

// Only "Last message" will be logged after 2 seconds if 
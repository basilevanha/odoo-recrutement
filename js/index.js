// Dynamically import all JavaScript files in the same folder
const requireContext = require.context('./', false, /\.js$/);

requireContext.keys().forEach((file) => {
    if (file !== './index.js') {
        requireContext(file);
    }
});
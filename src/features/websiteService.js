// Website Service - Handles website-specific operations
export const websiteService = {
  generateWebsite: async (prompt, template = 'modern', options = {}) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const templates = {
      modern: `<!DOCTYPE html>
<html>
<head>
    <title>${prompt}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ${prompt}
        </h1>
    </div>
</body>
</html>`,
      
      portfolio: `<!DOCTYPE html>
<html>
<head>
    <title>Portfolio | ${prompt}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-800 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <h1 class="text-2xl font-bold text-purple-600">Portfolio</h1>
        </div>
    </nav>
    <main class="max-w-7xl mx-auto px-4 py-12">
        <h2 class="text-4xl font-bold text-center dark:text-white mb-8">${prompt}</h2>
    </main>
</body>
</html>`
    };
    
    return templates[template] || templates.modern;
  },

  customizeTemplate: async (template, customizations) => {
    return template.replace(
      '</head>',
      `<style>
          :root {
              --primary: ${customizations.primaryColor};
              --secondary: ${customizations.secondaryColor};
          }
      </style>
      </head>`
    );
  }
};
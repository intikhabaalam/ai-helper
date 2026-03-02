// src/features/aiService.js
// UNIVERSAL AI ASSISTANT - Complete Fixed Version

export const aiService = {
  askAI: async (query) => {
    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const lowerQuery = query.toLowerCase().trim();
    
    // ===========================================
    // WEBSITE BUILDER - Jab website banani ho
    // ===========================================
    if (lowerQuery.includes('website') || 
        lowerQuery.includes('site') || 
        lowerQuery.includes('page') ||
        lowerQuery.includes('portfolio') ||
        lowerQuery.includes('ecommerce') ||
        lowerQuery.includes('shop') ||
        lowerQuery.includes('store') ||
        lowerQuery.includes('landing') ||
        lowerQuery.includes('make a website') ||
        lowerQuery.includes('create website') ||
        lowerQuery.includes('build website') ||
        lowerQuery.includes('blog')) {
      return await generateWebsite(query);
    }
    
    // ===========================================
    // CODE WRITER - Jab code chahiye
    // ===========================================
    if (lowerQuery.includes('code') ||
        lowerQuery.includes('program') ||
        lowerQuery.includes('function') ||
        lowerQuery.includes('component') ||
        lowerQuery.includes('script') ||
        lowerQuery.includes('write') ||
        lowerQuery.includes('create') ||
        lowerQuery.includes('react') ||
        lowerQuery.includes('python') ||
        lowerQuery.includes('javascript') ||
        lowerQuery.includes('java') ||
        lowerQuery.includes('html') ||
        lowerQuery.includes('css') ||
        lowerQuery.includes('how to center') ||
        lowerQuery.includes('array methods') ||
        lowerQuery.includes('todo app') ||
        lowerQuery.includes('counter')) {
      return await generateCode(query);
    }
    
    // ===========================================
    // TECHNOLOGY EXPLANATIONS
    // ===========================================
    if (lowerQuery.includes('what is') ||
        lowerQuery.includes('explain') ||
        lowerQuery.includes('define') ||
        lowerQuery.includes('meaning') ||
        lowerQuery.includes('react') ||
        lowerQuery.includes('vue') ||
        lowerQuery.includes('angular') ||
        lowerQuery.includes('next.js') ||
        lowerQuery.includes('tailwind') ||
        lowerQuery.includes('bootstrap') ||
        lowerQuery.includes('python') ||
        lowerQuery.includes('javascript') ||
        lowerQuery.includes('typescript') ||
        lowerQuery.includes('node.js') ||
        lowerQuery.includes('express') ||
        lowerQuery.includes('django') ||
        lowerQuery.includes('flask') ||
        lowerQuery.includes('database') ||
        lowerQuery.includes('sql') ||
        lowerQuery.includes('mongodb') ||
        lowerQuery.includes('api')) {
      return await generateTechExplanation(query);
    }
    
    // ===========================================
    // COMPARISONS
    // ===========================================
    if (lowerQuery.includes('vs') || 
        lowerQuery.includes('versus') ||
        lowerQuery.includes('difference between') ||
        lowerQuery.includes('compare')) {
      return await generateComparison(query);
    }
    
    // ===========================================
    // TUTORIALS
    // ===========================================
    if (lowerQuery.includes('how to') ||
        lowerQuery.includes('tutorial') ||
        lowerQuery.includes('guide') ||
        lowerQuery.includes('learn') ||
        lowerQuery.includes('step by step')) {
      return await generateTutorial(query);
    }
    
    // ===========================================
    // PROBLEM SOLVING
    // ===========================================
    if (lowerQuery.includes('error') ||
        lowerQuery.includes('bug') ||
        lowerQuery.includes('fix') ||
        lowerQuery.includes('issue') ||
        lowerQuery.includes('problem') ||
        lowerQuery.includes('not working')) {
      return await generateSolution(query);
    }
    
    // ===========================================
    // GENERAL KNOWLEDGE - Kuch bhi ho
    // ===========================================
    return await generateGeneralResponse(query);
  }
};

// ===========================================
// WEBSITE GENERATOR FUNCTIONS
// ===========================================

async function generateWebsite(query) {
  const lowerQuery = query.toLowerCase();
  
  // Portfolio Website
  if (lowerQuery.includes('portfolio') || lowerQuery.includes('personal')) {
    return {
      type: 'website',
      title: '✨ Modern Portfolio Website',
      description: 'Professional portfolio with dark mode and animations',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Portfolio | AI Generated</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @keyframes gradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .gradient-bg { background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); background-size: 400% 400%; animation: gradient 15s ease infinite; }
    </style>
</head>
<body class="bg-gray-900 text-white">
    <!-- Animated Background -->
    <div class="fixed inset-0 gradient-bg opacity-20"></div>
    
    <!-- Navbar -->
    <nav class="fixed w-full top-0 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center animate-float">
                        <span class="text-white font-bold">P</span>
                    </div>
                    <span class="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Portfolio
                    </span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-300 hover:text-white transition">Work</a>
                    <a href="#" class="text-gray-300 hover:text-white transition">About</a>
                    <a href="#" class="text-gray-300 hover:text-white transition">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center px-4 relative">
        <div class="text-center max-w-4xl mx-auto">
            <div class="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-8">
                <span class="text-white/90">✨ Available for freelance work</span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
                <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Creative Developer
                </span>
            </h1>
            
            <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                I build exceptional digital experiences that make a difference. Specialized in React, Node.js, and modern web technologies.
            </p>
            
            <div class="flex justify-center space-x-4">
                <button class="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition">
                    View Work
                </button>
                <button class="px-8 py-3 bg-gray-800 rounded-full font-semibold hover:bg-gray-700 transition">
                    Contact Me
                </button>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="py-20 px-4">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">Featured Projects</h2>
            <p class="text-center text-gray-400 mb-12">Some of my best work</p>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-gray-800 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition duration-300">
                    <div class="h-48 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">AI Platform</h3>
                        <p class="text-gray-400">React • Node.js • AI</p>
                    </div>
                </div>
                
                <div class="bg-gray-800 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition duration-300">
                    <div class="h-48 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">E-Commerce</h3>
                        <p class="text-gray-400">Next.js • Stripe • Tailwind</p>
                    </div>
                </div>
                
                <div class="bg-gray-800 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition duration-300">
                    <div class="h-48 bg-gradient-to-r from-green-600 to-emerald-600"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Analytics Dashboard</h3>
                        <p class="text-gray-400">Vue • D3 • Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 px-4 bg-gray-800/50">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="text-center p-4">
                    <div class="text-4xl mb-2">⚛️</div>
                    <h3 class="font-semibold">React</h3>
                </div>
                <div class="text-center p-4">
                    <div class="text-4xl mb-2">📱</div>
                    <h3 class="font-semibold">Next.js</h3>
                </div>
                <div class="text-center p-4">
                    <div class="text-4xl mb-2">🐍</div>
                    <h3 class="font-semibold">Python</h3>
                </div>
                <div class="text-center p-4">
                    <div class="text-4xl mb-2">🎨</div>
                    <h3 class="font-semibold">Tailwind</h3>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`
    };
  }

  // E-commerce Website
  if (lowerQuery.includes('shop') || lowerQuery.includes('store') || lowerQuery.includes('ecommerce')) {
    return {
      type: 'website',
      title: '🛍️ Modern E-Commerce Store',
      description: 'Complete online store with shopping cart',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Store | AI Generated</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-purple-600">ShopHub</h1>
                
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-600 hover:text-purple-600">Home</a>
                    <a href="#" class="text-gray-600 hover:text-purple-600">Products</a>
                    <a href="#" class="text-gray-600 hover:text-purple-600">About</a>
                    <a href="#" class="text-gray-600 hover:text-purple-600">Contact</a>
                </div>
                
                <div class="flex items-center space-x-4">
                    <button class="relative">
                        🛒 Cart
                        <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                    </button>
                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                        Login
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Banner -->
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div class="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 class="text-5xl font-bold mb-4">Summer Sale!</h1>
            <p class="text-xl mb-8">Up to 70% off on selected items</p>
            <button class="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition">
                Shop Now
            </button>
        </div>
    </div>

    <!-- Categories -->
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold mb-6">Shop by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-lg text-center hover:shadow-lg transition cursor-pointer">
                <div class="text-3xl mb-2">👕</div>
                <h3 class="font-semibold">Fashion</h3>
            </div>
            <div class="bg-white p-4 rounded-lg text-center hover:shadow-lg transition cursor-pointer">
                <div class="text-3xl mb-2">📱</div>
                <h3 class="font-semibold">Electronics</h3>
            </div>
            <div class="bg-white p-4 rounded-lg text-center hover:shadow-lg transition cursor-pointer">
                <div class="text-3xl mb-2">🏠</div>
                <h3 class="font-semibold">Home</h3>
            </div>
            <div class="bg-white p-4 rounded-lg text-center hover:shadow-lg transition cursor-pointer">
                <div class="text-3xl mb-2">📚</div>
                <h3 class="font-semibold">Books</h3>
            </div>
        </div>
    </div>

    <!-- Products Grid -->
    <div class="max-w-7xl mx-auto px-4 py-12">
        <h2 class="text-2xl font-bold mb-8">Featured Products</h2>
        <div class="grid md:grid-cols-4 gap-6">
            ${[1,2,3,4,5,6,7,8].map(i => `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                    <div class="h-48 bg-gradient-to-br from-purple-200 to-pink-200 relative">
                        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <button class="bg-white text-purple-600 px-4 py-2 rounded-lg">Quick View</button>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold mb-2">Product ${i}</h3>
                        <div class="flex items-center mb-2">
                            ${Array(5).fill('★').join('')}
                            <span class="text-sm text-gray-500 ml-2">(45)</span>
                        </div>
                        <p class="text-purple-600 font-bold mb-2">$${i * 29}.99</p>
                        <button class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-16">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="font-bold mb-4">About Us</h3>
                    <p class="text-gray-400">Your one-stop shop for everything. Quality products at great prices.</p>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Quick Links</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white">About</a></li>
                        <li><a href="#" class="hover:text-white">Contact</a></li>
                        <li><a href="#" class="hover:text-white">FAQ</a></li>
                        <li><a href="#" class="hover:text-white">Shipping</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Categories</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white">Electronics</a></li>
                        <li><a href="#" class="hover:text-white">Fashion</a></li>
                        <li><a href="#" class="hover:text-white">Home</a></li>
                        <li><a href="#" class="hover:text-white">Books</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Follow Us</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition">📘</a>
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition">🐦</a>
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition">📷</a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 ShopHub. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`
    };
  }

  // Blog Website
  if (lowerQuery.includes('blog')) {
    return {
      type: 'website',
      title: '📝 Modern Blog Platform',
      description: 'Beautiful blog with articles',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog | AI Generated</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-800">My Blog</h1>
                <div class="space-x-6">
                    <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">Welcome to My Blog</h1>
            <p class="text-xl">Thoughts, stories and ideas</p>
        </div>
    </div>

    <!-- Blog Posts -->
    <div class="max-w-4xl mx-auto px-4 py-12">
        <div class="space-y-8">
            ${[1,2,3,4,5].map(i => `
                <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                    <div class="md:flex">
                        <div class="md:w-1/3 h-48 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                        <div class="p-6 md:w-2/3">
                            <div class="text-sm text-purple-600 mb-2">Technology • ${i} days ago</div>
                            <h2 class="text-2xl font-bold mb-2">Blog Post Title ${i}</h2>
                            <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                            <button class="text-purple-600 font-semibold hover:text-purple-800">Read More →</button>
                        </div>
                    </div>
                </article>
            `).join('')}
        </div>

        <!-- Newsletter -->
        <div class="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center text-white">
            <h3 class="text-2xl font-bold mb-4">Subscribe to Newsletter</h3>
            <p class="mb-6">Get the latest posts delivered right to your inbox</p>
            <div class="max-w-md mx-auto flex">
                <input type="email" placeholder="Your email" class="flex-1 px-4 py-2 rounded-l-lg text-gray-900">
                <button class="bg-white text-purple-600 px-6 py-2 rounded-r-lg font-semibold hover:bg-gray-100">
                    Subscribe
                </button>
            </div>
        </div>
    </div>
</body>
</html>`
    };
  }

  // Business Website
  if (lowerQuery.includes('business') || lowerQuery.includes('company')) {
    return {
      type: 'website',
      title: '💼 Professional Business Website',
      description: 'Corporate website with modern design',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Pro | AI Generated</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white">
    <!-- Navbar -->
    <nav class="bg-white shadow-lg sticky top-0">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-800">BusinessPro</h1>
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
                </div>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Get Started
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6">Grow Your Business With Us</h1>
            <p class="text-xl mb-8 max-w-2xl mx-auto">We help companies scale with innovative solutions and expert consulting</p>
            <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition">
                Learn More
            </button>
        </div>
    </section>

    <!-- Services -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-4">Our Services</h2>
            <p class="text-center text-gray-600 mb-12">We offer comprehensive business solutions</p>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="p-6 text-center border rounded-xl hover:shadow-lg transition">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📊</div>
                    <h3 class="text-xl font-bold mb-2">Consulting</h3>
                    <p class="text-gray-600">Expert advice to grow your business</p>
                </div>
                <div class="p-6 text-center border rounded-xl hover:shadow-lg transition">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🚀</div>
                    <h3 class="text-xl font-bold mb-2">Development</h3>
                    <p class="text-gray-600">Custom software solutions</p>
                </div>
                <div class="p-6 text-center border rounded-xl hover:shadow-lg transition">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📈</div>
                    <h3 class="text-xl font-bold mb-2">Analytics</h3>
                    <p class="text-gray-600">Data-driven insights</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About -->
    <section class="bg-gray-50 py-20">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold mb-4">About Our Company</h2>
                    <p class="text-gray-600 mb-6">We are a team of passionate professionals dedicated to helping businesses succeed in the digital age. With over 10 years of experience, we've helped hundreds of companies achieve their goals.</p>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <div class="text-3xl font-bold text-blue-600">500+</div>
                            <div class="text-gray-600">Projects</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-blue-600">100+</div>
                            <div class="text-gray-600">Clients</div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 h-64 rounded-xl"></div>
            </div>
        </div>
    </section>
</body>
</html>`
    };
  }

  // Default Website
  return {
    type: 'website',
    title: '🌐 Your Website',
    description: 'Modern website created just for you',
    html: `<!DOCTYPE html>
<html>
<head>
    <title>${query}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    </style>
</head>
<body class="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 min-h-screen flex items-center" style="background-size: 200% 200%; animation: gradient 10s ease infinite;">
    <div class="max-w-4xl mx-auto px-4 text-center text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">${query}</h1>
        <p class="text-xl mb-8 opacity-90">Your AI-generated website is ready!</p>
        <button class="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition">
            Get Started
        </button>
    </div>
</body>
</html>`
  };
}

// ===========================================
// CODE GENERATOR FUNCTIONS
// ===========================================

async function generateCode(query) {
  const lowerQuery = query.toLowerCase();
  
  // React Component
  if (lowerQuery.includes('react') || lowerQuery.includes('component')) {
    return {
      type: 'code',
      title: '⚛️ React Component',
      code: `import React, { useState, useEffect } from 'react';

const ModernComponent = ({ initialData = [] }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result.slice(0, 5));
      setError(null);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Data List</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {data.map((item, index) => (
            <li key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <h3 className="font-semibold">{item.title || item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.body || item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModernComponent;`,
      explanation: "✅ Complete React component with:\n• State management (useState, useEffect)\n• API integration\n• Loading states\n• Error handling\n• Modern styling"
    };
  }

  // Todo App
  if (lowerQuery.includes('todo') || lowerQuery.includes('todo app')) {
    return {
      type: 'code',
      title: '✅ Todo App',
      code: `import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
  ]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: input,
          completed: false
        }
      ]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return todo;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="text-center p-2 bg-gray-50 rounded">
          <div className="text-xl font-bold">{stats.total}</div>
          <div className="text-xs text-gray-500">Total</div>
        </div>
        <div className="text-center p-2 bg-green-50 rounded">
          <div className="text-xl font-bold text-green-600">{stats.completed}</div>
          <div className="text-xs text-gray-500">Done</div>
        </div>
        <div className="text-center p-2 bg-yellow-50 rounded">
          <div className="text-xl font-bold text-yellow-600">{stats.active}</div>
          <div className="text-xs text-gray-500">Active</div>
        </div>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Add
        </button>
      </form>

      {/* Filters */}
      <div className="flex justify-center space-x-2 mb-4">
        {['all', 'active', 'completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={\`px-3 py-1 rounded-lg text-sm \${filter === f 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'}\`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Todo List */}
      <ul className="space-y-2">
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 text-purple-600 rounded"
              />
              <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;`,
      explanation: "✅ Complete Todo App with:\n• Add/delete todos\n• Mark complete\n• Filter by status\n• Statistics\n• Clean UI"
    };
  }

  // Counter App
  if (lowerQuery.includes('counter')) {
    return {
      type: 'code',
      title: '🔢 Counter App',
      code: `import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  const increment = () => {
    setCount(prev => prev + step);
    setHistory(prev => [...prev, \`Incremented by \${step}\`]);
  };

  const decrement = () => {
    setCount(prev => prev - step);
    setHistory(prev => [...prev, \`Decremented by \${step}\`]);
  };

  const reset = () => {
    setCount(0);
    setStep(1);
    setHistory([]);
  };

  const isEven = count % 2 === 0;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Counter App</h1>
      
      {/* Counter Display */}
      <div className="text-center mb-8">
        <div className="text-6xl font-bold text-purple-600 mb-2">{count}</div>
        <div className="text-sm text-gray-500">
          {isEven ? 'Even' : 'Odd'} number
        </div>
      </div>

      {/* Step Control */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <span className="text-gray-600">Step:</span>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="w-32"
        />
        <span className="font-bold text-purple-600">{step}</span>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={decrement}
          className="px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Increment
        </button>
      </div>

      <button
        onClick={reset}
        className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition mb-6"
      >
        Reset
      </button>

      {/* History */}
      {history.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">History:</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            {history.slice(-5).reverse().map((item, index) => (
              <li key={index} className="p-1 bg-gray-50 rounded">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CounterApp;`,
      explanation: "✅ Interactive Counter App with:\n• Increment/decrement\n• Step control\n• Even/odd detection\n• History tracking\n• Reset functionality"
    };
  }

  // JavaScript Array Methods
  if (lowerQuery.includes('array methods')) {
    return {
      type: 'code',
      title: '📚 JavaScript Array Methods',
      code: `// JavaScript Array Methods - Complete Guide

const numbers = [1, 2, 3, 4, 5];
const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 }
];

// 1. map() - Transform each element
const doubled = numbers.map(num => num * 2);
console.log('Map (double):', doubled); // [2, 4, 6, 8, 10]

const names = users.map(user => user.name);
console.log('Map (names):', names); // ['John', 'Jane', 'Bob']

// 2. filter() - Filter elements
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Filter (even):', evenNumbers); // [2, 4]

const adults = users.filter(user => user.age >= 30);
console.log('Filter (age>=30):', adults); // [Jane, Bob]

// 3. reduce() - Reduce to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Reduce (sum):', sum); // 15

const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log('Reduce (total age):', totalAge); // 90

// 4. find() - Find first match
const firstEven = numbers.find(num => num % 2 === 0);
console.log('Find (first even):', firstEven); // 2

const user = users.find(user => user.name === 'Jane');
console.log('Find (Jane):', user); // { id: 2, name: 'Jane', age: 30 }

// 5. some() - Any element matches?
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Some (has even):', hasEven); // true

// 6. every() - All elements match?
const allPositive = numbers.every(num => num > 0);
console.log('Every (all positive):', allPositive); // true

// 7. forEach() - Loop through
console.log('ForEach:');
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});

// 8. sort() - Sort array
const unsorted = [3, 1, 4, 2, 5];
const sorted = [...unsorted].sort((a, b) => a - b);
console.log('Sort (ascending):', sorted); // [1, 2, 3, 4, 5]

// 9. includes() - Check if includes
const hasThree = numbers.includes(3);
console.log('Includes (has 3):', hasThree); // true

// 10. push/pop/shift/unshift
const arr = [1, 2, 3];
arr.push(4); // Add to end
console.log('Push:', arr); // [1, 2, 3, 4]

arr.pop(); // Remove from end
console.log('Pop:', arr); // [1, 2, 3]

arr.unshift(0); // Add to start
console.log('Unshift:', arr); // [0, 1, 2, 3]

arr.shift(); // Remove from start
console.log('Shift:', arr); // [1, 2, 3]

// 11. slice() - Extract portion
const slice1 = numbers.slice(1, 3);
console.log('Slice (1-3):', slice1); // [2, 3]

// 12. splice() - Add/remove elements
const colors = ['red', 'green', 'blue'];
colors.splice(1, 1, 'yellow'); // Remove 1 at index 1, add 'yellow'
console.log('Splice:', colors); // ['red', 'yellow', 'blue']

// 13. concat() - Merge arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = arr1.concat(arr2);
console.log('Concat:', merged); // [1, 2, 3, 4]

// 14. join() - Convert to string
const joined = numbers.join(' - ');
console.log('Join:', joined); // "1 - 2 - 3 - 4 - 5"

// 15. flat() - Flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat(2);
console.log('Flat:', flat); // [1, 2, 3, 4, 5, 6]

// Practical Example: Data Transformation
const orders = [
  { id: 1, amount: 100, status: 'completed' },
  { id: 2, amount: 200, status: 'pending' },
  { id: 3, amount: 150, status: 'completed' }
];

// Get completed orders total
const completedTotal = orders
  .filter(order => order.status === 'completed')
  .map(order => order.amount)
  .reduce((total, amount) => total + amount, 0);

console.log('Completed orders total:', completedTotal); // 250

// Group by status
const grouped = orders.reduce((acc, order) => {
  if (!acc[order.status]) {
    acc[order.status] = [];
  }
  acc[order.status].push(order);
  return acc;
}, {});

console.log('Grouped by status:', grouped);
// {
//   completed: [{ id: 1, amount: 100 }, { id: 3, amount: 150 }],
//   pending: [{ id: 2, amount: 200 }]
// }`,
      explanation: "✅ Complete guide to JavaScript array methods with:\n• 15+ methods with examples\n• Practical use cases\n• Real-world examples\n• Clear explanations"
    };
  }

  // How to center a div
  if (lowerQuery.includes('how to center')) {
    return {
      type: 'code',
      title: '🎯 How to Center a Div',
      code: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* Method 1: Flexbox (Modern) */
        .container-flex {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 300px;
            border: 2px solid #333;
            margin-bottom: 20px;
        }
        
        .box {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
        }

        /* Method 2: Grid */
        .container-grid {
            display: grid;
            place-items: center;
            height: 300px;
            border: 2px solid #333;
            margin-bottom: 20px;
        }

        /* Method 3: Position Absolute */
        .container-absolute {
            position: relative;
            height: 300px;
            border: 2px solid #333;
            margin-bottom: 20px;
        }
        
        .absolute-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
        }

        /* Method 4: Text-align (for inline elements) */
        .container-text {
            text-align: center;
            height: 300px;
            border: 2px solid #333;
            margin-bottom: 20px;
        }
        
        .inline-box {
            display: inline-block;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #5f2c82 0%, #49a09d 100%);
            color: white;
            line-height: 100px;
            border-radius: 10px;
            margin-top: 100px;
        }

        /* Method 5: Margin Auto (for block elements) */
        .container-margin {
            height: 300px;
            border: 2px solid #333;
            margin-bottom: 20px;
            position: relative;
        }
        
        .margin-auto {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            margin: 100px auto 0;
        }

        /* Method 6: Table Cell */
        .container-table {
            display: table;
            width: 100%;
            height: 300px;
            border: 2px solid #333;
            margin-bottom: 20px;
        }
        
        .table-cell {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
        }
        
        .table-box {
            display: inline-block;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #f39c12 0%, #d35400 100%);
            color: white;
            line-height: 100px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>6 Ways to Center a Div</h1>
    
    <h2>1. Flexbox (Best Method)</h2>
    <div class="container-flex">
        <div class="box">Flexbox</div>
    </div>

    <h2>2. CSS Grid</h2>
    <div class="container-grid">
        <div class="box">Grid</div>
    </div>

    <h2>3. Position Absolute + Transform</h2>
    <div class="container-absolute">
        <div class="absolute-center">Absolute</div>
    </div>

    <h2>4. Text-align (for inline/inline-block)</h2>
    <div class="container-text">
        <div class="inline-box">Inline</div>
    </div>

    <h2>5. Margin Auto</h2>
    <div class="container-margin">
        <div class="margin-auto">Margin</div>
    </div>

    <h2>6. Table Cell</h2>
    <div class="container-table">
        <div class="table-cell">
            <div class="table-box">Table</div>
        </div>
    </div>
</body>
</html>`,
      explanation: "✅ 6 different methods to center a div:\n• Flexbox (modern, recommended)\n• CSS Grid (simple)\n• Position absolute (legacy)\n• Text-align (inline elements)\n• Margin auto (block elements)\n• Table cell (old school)"
    };
  }

  // Python function
  if (lowerQuery.includes('python')) {
    return {
      type: 'code',
      title: '🐍 Python Function Example',
      code: `# Python Function Examples

# 1. Basic function
def greet(name):
    """Simple greeting function"""
    return f"Hello, {name}!"

print(greet("World"))  # Hello, World!

# 2. Function with multiple parameters
def calculate(a, b, operation='add'):
    """Calculator function with default parameter"""
    if operation == 'add':
        return a + b
    elif operation == 'subtract':
        return a - b
    elif operation == 'multiply':
        return a * b
    elif operation == 'divide':
        return a / b if b != 0 else "Cannot divide by zero"
    else:
        return "Invalid operation"

print(calculate(10, 5))  # 15
print(calculate(10, 5, 'multiply'))  # 50

# 3. Function with variable arguments
def sum_all(*args):
    """Sum any number of arguments"""
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))  # 15

# 4. Function with keyword arguments
def print_info(**kwargs):
    """Print key-value pairs"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="John", age=25, city="New York")

# 5. Lambda function (anonymous)
square = lambda x: x ** 2
print(square(5))  # 25

# 6. Recursive function
def factorial(n):
    """Calculate factorial recursively"""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

# 7. Generator function
def fibonacci(n):
    """Generate Fibonacci sequence"""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num, end=' ')  # 0 1 1 2 3 5 8 13 21 34
print()

# 8. Decorator function
def timer(func):
    """Decorator to measure execution time"""
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done"

slow_function()

# 9. Function with error handling
def divide_safe(a, b):
    """Safe division with error handling"""
    try:
        result = a / b
    except ZeroDivisionError:
        return "Error: Cannot divide by zero"
    except TypeError:
        return "Error: Invalid input types"
    else:
        return result
    finally:
        print("Division attempted")

print(divide_safe(10, 2))  # 5.0
print(divide_safe(10, 0))  # Error: Cannot divide by zero

# 10. Class method
class Calculator:
    """Calculator class"""
    
    @staticmethod
    def add(a, b):
        return a + b
    
    @classmethod
    def multiply(cls, a, b):
        return a * b
    
    def subtract(self, a, b):
        return a - b

calc = Calculator()
print(Calculator.add(5, 3))  # 8
print(Calculator.multiply(5, 3))  # 15
print(calc.subtract(5, 3))  # 2

# Practical Example: Data Processing
def process_data(data, operations=None):
    """
    Process data with multiple operations
    
    Args:
        data: List of numbers
        operations: List of operations to apply
    
    Returns:
        Dictionary with results
    """
    if not data:
        return {"error": "No data provided"}
    
    if operations is None:
        operations = ['sum', 'average', 'max', 'min']
    
    results = {}
    
    if 'sum' in operations:
        results['sum'] = sum(data)
    
    if 'average' in operations:
        results['average'] = sum(data) / len(data)
    
    if 'max' in operations:
        results['max'] = max(data)
    
    if 'min' in operations:
        results['min'] = min(data)
    
    return results

# Test the function
numbers = [10, 20, 30, 40, 50]
result = process_data(numbers, ['sum', 'average', 'max', 'min'])
print("Data Processing Result:")
for key, value in result.items():
    print(f"  {key}: {value}")`,
      explanation: "✅ Complete Python function guide with:\n• Basic to advanced functions\n• Lambda, decorators, generators\n• Error handling\n• Practical examples"
    };
  }

  // Default code response
  return {
    type: 'code',
    title: '💻 Generated Code',
    code: `// Solution for: ${query}

// Problem Understanding
// ${query} requires a systematic approach

// Solution Implementation
function solve(input) {
    // Input validation
    if (!input) {
        throw new Error('Input is required');
    }
    
    // Processing logic
    const result = processInput(input);
    
    // Return formatted output
    return formatOutput(result);
}

// Helper function 1
function processInput(data) {
    // Process the input data
    return data;
}

// Helper function 2
function formatOutput(data) {
    // Format the output
    return data;
}

// Example usage
try {
    const testData = [1, 2, 3, 4, 5];
    const result = solve(testData);
    console.log('Result:', result);
} catch (error) {
    console.error('Error:', error.message);
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Best Practices Applied:
// ✓ Error handling
// ✓ Input validation
// ✓ Modular code
// ✓ Clear naming
// ✓ Comments included`,
    explanation: "✅ Production-ready code with:\n• Error handling\n• Input validation\n• Modular structure\n• Best practices\n• Time/Space complexity"
  };
}

// ===========================================
// TECHNOLOGY EXPLANATION FUNCTIONS
// ===========================================

async function generateTechExplanation(query) {
  const lowerQuery = query.toLowerCase();
  
  // React explanation
  if (lowerQuery.includes('react')) {
    return {
      type: 'search',
      title: '⚛️ React.js - Complete Guide',
      description: 'React is a JavaScript library for building user interfaces, developed and maintained by Facebook.',
      links: [
        {
          title: 'Official Documentation',
          url: 'https://react.dev',
          desc: 'Comprehensive React documentation with examples'
        },
        {
          title: 'React Tutorial for Beginners',
          url: '#',
          desc: 'Learn React from scratch with practical examples'
        },
        {
          title: 'React Hooks Guide',
          url: '#',
          desc: 'Master useState, useEffect, and custom hooks'
        },
        {
          title: 'React Best Practices 2024',
          url: '#',
          desc: 'Modern React development patterns'
        },
        {
          title: 'React vs Other Frameworks',
          url: '#',
          desc: 'Compare React with Vue, Angular, and Svelte'
        }
      ],
      related: ['Next.js', 'Vite', 'Redux', 'TypeScript', 'Tailwind CSS'],
      content: `## 📖 What is React?\n\nReact is a **JavaScript library** for building user interfaces...`
    };
  }
  
  // Python explanation
  if (lowerQuery.includes('python')) {
    return {
      type: 'search',
      title: '🐍 Python Programming Language',
      description: 'Python is a high-level, interpreted programming language known for its simplicity.',
      links: [
        {
          title: 'Python Official Website',
          url: 'https://python.org',
          desc: 'Download Python and access official docs'
        },
        {
          title: 'Python for Beginners',
          url: '#',
          desc: 'Start learning Python today'
        }
      ],
      related: ['Django', 'Flask', 'NumPy', 'Pandas'],
      content: `## 📖 What is Python?\n\nPython is a **high-level, interpreted programming language**...`
    };
  }
  
  // JavaScript explanation
  if (lowerQuery.includes('javascript') || lowerQuery.includes('js')) {
    return {
      type: 'search',
      title: '📜 JavaScript - The Language of the Web',
      description: 'JavaScript is a programming language that enables interactive web pages.',
      links: [
        {
          title: 'MDN JavaScript Guide',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          desc: 'Comprehensive JavaScript documentation'
        },
        {
          title: 'JavaScript.info',
          url: '#',
          desc: 'Modern JavaScript tutorial'
        }
      ],
      related: ['TypeScript', 'Node.js', 'React', 'Vue'],
      content: `## 📖 What is JavaScript?\n\nJavaScript is a **high-level, interpreted programming language**...`
    };
  }
  
  // Default explanation
  return {
    type: 'search',
    title: `🔍 ${query}`,
    description: `Here's information about "${query}"`,
    links: [
      {
        title: `Learn about ${query}`,
        url: '#',
        desc: `Complete guide to ${query}`
      }
    ],
    related: ['Documentation', 'Tutorials', 'Examples'],
    content: `## 📖 About ${query}\n\nHere's what I found about "${query}"...`
  };
}

// ===========================================
// COMPARISON FUNCTION
// ===========================================

async function generateComparison(query) {
  return {
    type: 'search',
    title: `⚖️ ${query}`,
    description: 'Here\'s a detailed comparison',
    links: [
      {
        title: 'Detailed Comparison',
        url: '#',
        desc: 'In-depth analysis'
      }
    ],
    related: ['Pros', 'Cons', 'Use Cases'],
    content: `## 📊 Comparison\n\nHere's what I found...`
  };
}

// ===========================================
// TUTORIAL FUNCTION
// ===========================================

async function generateTutorial(query) {
  return {
    type: 'search',
    title: `📚 ${query}`,
    description: 'Step-by-step tutorial',
    links: [
      {
        title: 'Tutorial',
        url: '#',
        desc: 'Learn step by step'
      }
    ],
    related: ['Beginner', 'Intermediate', 'Advanced'],
    content: `## 📖 Tutorial\n\nHere's how to do it...`
  };
}

// ===========================================
// SOLUTION FUNCTION
// ===========================================

async function generateSolution(query) {
  return {
    type: 'search',
    title: `🔧 ${query}`,
    description: 'Here\'s the solution',
    links: [
      {
        title: 'Solution',
        url: '#',
        desc: 'Fix the problem'
      }
    ],
    related: ['Common Issues', 'Debugging', 'Best Practices'],
    content: `## 🛠️ Solution\n\nHere's how to fix it...`
  };
}

// ===========================================
// GENERAL RESPONSE FUNCTION
// ===========================================

async function generateGeneralResponse(query) {
  return {
    type: 'search',
    title: `💬 ${query}`,
    description: `Here's what I know about "${query}"`,
    links: [
      {
        title: `Learn more about ${query}`,
        url: '#',
        desc: 'Comprehensive guide'
      }
    ],
    related: ['Documentation', 'Tutorials', 'Examples', 'Community'],
    content: `## 📖 ${query}\n\nI'll help you with that! Here's what I found...`
  };
}

// ===========================================
// EXPORT - YEH IMPORTANT HAI
// ===========================================
export default aiService;
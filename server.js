const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());

// In-memory storage for ratings (in production, use a database)
let gameRatings = {};
let gameReviews = {};

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for gaming hello message
app.get('/api/hello', (req, res) => {
    res.json({ 
        message: 'Welcome to GameZone Portal! 🎮', 
        timestamp: new Date().toISOString(),
        server: 'EC2 Gaming Instance',
        status: 'Ready for Epic Gaming!',
        totalGames: 50,
        platforms: ['PC', 'Mobile', 'Console'],
        environment: NODE_ENV,
        steamApiConfigured: !!process.env.STEAM_API_KEY,
        rawgApiConfigured: !!process.env.RAWG_API_KEY
    });
});

// API endpoint to get server info
app.get('/api/info', (req, res) => {
    res.json({
        gamePortal: 'GameZone Portal',
        nodeVersion: process.version,
        platform: process.platform,
        uptime: `${Math.floor(process.uptime() / 60)} minutes`,
        memory: {
            used: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
            total: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB`
        },
        features: [
            'Game Discovery',
            'Rating System',
            'Download Links',
            'Platform Filtering',
            'Mobile Responsive'
        ]
    });
});

// API endpoint to submit game rating
app.post('/api/games/:gameId/rate', (req, res) => {
    const { gameId } = req.params;
    const { rating, review } = req.body;
    
    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }
    
    // Initialize arrays if they don't exist
    if (!gameRatings[gameId]) {
        gameRatings[gameId] = [];
        gameReviews[gameId] = [];
    }
    
    // Add rating and review
    gameRatings[gameId].push(rating);
    if (review) {
        gameReviews[gameId].push({
            rating,
            review,
            timestamp: new Date().toISOString(),
            userId: `user_${Math.random().toString(36).substr(2, 9)}`
        });
    }
    
    // Calculate average rating
    const avgRating = gameRatings[gameId].reduce((a, b) => a + b, 0) / gameRatings[gameId].length;
    
    res.json({
        success: true,
        message: 'Rating submitted successfully!',
        gameId,
        newRating: rating,
        averageRating: Math.round(avgRating * 10) / 10,
        totalRatings: gameRatings[gameId].length
    });
});

// API endpoint to get game ratings
app.get('/api/games/:gameId/ratings', (req, res) => {
    const { gameId } = req.params;
    
    const ratings = gameRatings[gameId] || [];
    const reviews = gameReviews[gameId] || [];
    
    const avgRating = ratings.length > 0 
        ? Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10
        : 0;
    
    res.json({
        gameId,
        averageRating: avgRating,
        totalRatings: ratings.length,
        reviews: reviews.slice(-10) // Return last 10 reviews
    });
});

// API endpoint to get gaming stats
app.get('/api/stats', (req, res) => {
    const totalRatings = Object.values(gameRatings).reduce((total, ratings) => total + ratings.length, 0);
    const totalReviews = Object.values(gameReviews).reduce((total, reviews) => total + reviews.length, 0);
    const ratedGames = Object.keys(gameRatings).length;
    
    res.json({
        totalGames: 50,
        ratedGames,
        totalRatings,
        totalReviews,
        averageRating: totalRatings > 0 ? 4.3 : 0,
        popularPlatforms: ['Mobile', 'PC', 'Console'],
        topGenres: ['Action RPG', 'FPS', 'Battle Royale', 'Strategy']
    });
});

// API endpoint for game search
app.get('/api/search', (req, res) => {
    const { query, platform, genre } = req.query;
    
    // Mock search results
    const mockResults = [
        { id: 1, title: 'Cyberpunk 2077', platform: 'PC', genre: 'Action RPG', rating: 4.5 },
        { id: 2, title: 'Genshin Impact', platform: 'Mobile', genre: 'Action RPG', rating: 4.7 },
        { id: 3, title: 'Call of Duty Mobile', platform: 'Mobile', genre: 'FPS', rating: 4.3 }
    ];
    
    let results = mockResults;
    
    if (query) {
        results = results.filter(game => 
            game.title.toLowerCase().includes(query.toLowerCase())
        );
    }
    
    if (platform) {
        results = results.filter(game => 
            game.platform.toLowerCase() === platform.toLowerCase()
        );
    }
    
    if (genre) {
        results = results.filter(game => 
            game.genre.toLowerCase().includes(genre.toLowerCase())
        );
    }
    
    res.json({
        query,
        platform,
        genre,
        results,
        totalFound: results.length
    });
});

// API endpoint for trending games
app.get('/api/trending', (req, res) => {
    res.json({
        trending: [
            { id: 1, title: 'Baldur\'s Gate 3', platform: 'PC', rating: 4.9, trend: '+15%' },
            { id: 2, title: 'Starfield', platform: 'PC', rating: 4.2, trend: '+25%' },
            { id: 3, title: 'PUBG Mobile', platform: 'Mobile', rating: 4.4, trend: '+8%' }
        ],
        updated: new Date().toISOString()
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'GameZone Portal API',
        version: '1.0.0'
    });
});

// Image proxy endpoint to handle CORS issues
app.get('/api/image-proxy', (req, res) => {
    const { url } = req.query;
    
    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }
    
    // For security, only allow certain domains
    const allowedDomains = [
        'shared.akamai.steamstatic.com',
        'images.unsplash.com',
        'via.placeholder.com',
        'cdn.cloudflare.steamstatic.com'
    ];
    
    try {
        const urlObj = new URL(url);
        if (!allowedDomains.includes(urlObj.hostname)) {
            return res.status(403).json({ error: 'Domain not allowed' });
        }
        
        // Simple redirect - in production you might want to fetch and serve the image
        res.redirect(url);
    } catch (error) {
        res.status(400).json({ error: 'Invalid URL' });
    }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log('🎮 ================================');
    console.log('🚀 GameZone Portal Server Started!');
    console.log('🎯 ================================');
    console.log(`🌐 Server running on port ${PORT}`);
    console.log(`🔗 Access at: http://localhost:${PORT}`);
    console.log(`🌍 Environment: ${NODE_ENV}`);
    console.log(`🔑 Steam API: ${process.env.STEAM_API_KEY ? '✅ Configured' : '❌ Not configured'}`);
    console.log(`🎲 RAWG API: ${process.env.RAWG_API_KEY ? '✅ Configured' : '❌ Not configured'}`);
    console.log('🎮 Ready for Epic Gaming!');
    console.log('🎮 ================================');
});

// Gaming data
const gamesData = [
    {
        id: 1,
        title: "Cyberpunk 2077: Phantom Liberty",
        genre: "Action RPG",
        platform: "PC",
        rating: 4.5,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
        emoji: "🌃",
        description: "Experience the ultimate cyberpunk adventure in Night City. Navigate through neon-lit streets, hack into corporate systems, and uncover dark secrets in this immersive RPG.",
        requirements: "OS: Windows 10 64-bit, Processor: Intel Core i5-3570K, Memory: 8 GB RAM, Graphics: NVIDIA GTX 780 or AMD Radeon RX 470",
        downloadUrl: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
        downloads: 5000000
    },
    {
        id: 2,
        title: "Genshin Impact",
        genre: "Action RPG",
        platform: "Mobile",
        rating: 4.7,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg",
        emoji: "⚔️",
        description: "Embark on a journey across Teyvat to find your lost sibling and unravel the mysteries of this magical world. Features stunning visuals and elemental combat.",
        requirements: "iOS 9.0 or later, Android 7.0 (API level 24) or higher, 8GB storage space",
        downloadUrl: "https://genshin.hoyoverse.com/",
        downloads: 12000000
    },
    {
        id: 3,
        title: "Baldur's Gate 3",
        genre: "RPG",
        platform: "PC",
        rating: 4.9,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
        emoji: "🐉",
        description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival. Based on D&D 5th Edition rules.",
        requirements: "OS: Windows 10 64-bit, Processor: Intel i5-4690 / AMD FX 4350, Memory: 8 GB RAM, Graphics: Nvidia GTX 970 / RX 480",
        downloadUrl: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
        downloads: 3500000
    },
    {
        id: 4,
        title: "Call of Duty: Mobile",
        genre: "FPS",
        platform: "Mobile",
        rating: 4.3,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1962663/header.jpg",
        emoji: "🔫",
        description: "The ultimate mobile FPS experience. Play iconic multiplayer maps and modes, battle royale, and zombies in this action-packed mobile game.",
        requirements: "iOS 9.0+, Android 5.1+, 2GB RAM, 4GB storage space",
        downloadUrl: "https://www.callofduty.com/mobile",
        downloads: 15000000
    },
    {
        id: 5,
        title: "Starfield",
        genre: "Space RPG",
        platform: "PC",
        rating: 4.2,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg",
        emoji: "🚀",
        description: "Explore the galaxy like never before in Bethesda's newest single-player RPG. Create your character and embark on an epic journey among the stars.",
        requirements: "OS: Windows 10 version 22H2, Processor: AMD Ryzen 5 2600X, Intel Core i7-6800K, Memory: 16 GB RAM, Graphics: AMD Radeon RX 5700, NVIDIA GeForce 1070 Ti",
        downloadUrl: "https://bethesda.net/en/game/starfield",
        downloads: 2800000
    },
    {
        id: 6,
        title: "PUBG Mobile",
        genre: "Battle Royale",
        platform: "Mobile",
        rating: 4.4,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg",
        emoji: "🏆",
        description: "Drop into the action-packed world of PUBG Mobile. 100 players, one battlefield. Survive the ultimate test and be the last one standing.",
        requirements: "iOS 9.0+, Android 5.1.1+, 3GB RAM, 2GB storage space",
        downloadUrl: "https://pubgmobile.com/",
        downloads: 20000000
    },
    {
        id: 7,
        title: "Hogwarts Legacy",
        genre: "Action RPG",
        platform: "PC",
        rating: 4.6,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg",
        emoji: "🏰",
        description: "Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart.",
        requirements: "OS: Windows 10 64-bit, Processor: Intel Core i5-6600 (3.3Ghz), Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 960 4GB",
        downloadUrl: "https://www.hogwartslegacy.com/",
        downloads: 4200000
    },
    {
        id: 8,
        title: "Among Us",
        genre: "Party",
        platform: "Mobile",
        rating: 4.1,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg",
        emoji: "👾",
        description: "Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor.",
        requirements: "iOS 10.0+, Android 4.4+, 1GB RAM, 250MB storage space",
        downloadUrl: "https://www.innersloth.com/games/among-us/",
        downloads: 8500000
    },
    {
        id: 9,
        title: "The Witcher 3: Wild Hunt",
        genre: "Action RPG",
        platform: "PC",
        rating: 4.8,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
        emoji: "⚔️",
        description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy.",
        requirements: "OS: Windows 7 64-bit, Processor: Intel CPU Core i5-2500K 3.3GHz, Memory: 6 GB RAM, Graphics: Nvidia GPU GeForce GTX 660",
        downloadUrl: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
        downloads: 6800000
    },
    {
        id: 10,
        title: "Minecraft",
        genre: "Sandbox",
        platform: "Mobile",
        rating: 4.6,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1794680/header.jpg",
        emoji: "🧱",
        description: "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode.",
        requirements: "iOS 10.0+, Android 4.2+, 1GB RAM, 1GB storage space",
        downloadUrl: "https://www.minecraft.net/",
        downloads: 25000000
    },
    {
        id: 11,
        title: "Grand Theft Auto V",
        genre: "Action",
        platform: "PC",
        rating: 4.7,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
        emoji: "🚗",
        description: "Experience Rockstar Games' critically acclaimed open world game, Grand Theft Auto V. When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive.",
        requirements: "OS: Windows 10 64-bit, Processor: Intel Core i5 3470 @ 3.2GHz, Memory: 8 GB RAM, Graphics: NVIDIA GTX 660 2GB",
        downloadUrl: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
        downloads: 8900000
    },
    {
        id: 12,
        title: "Mobile Legends",
        genre: "MOBA",
        platform: "Mobile",
        rating: 4.2,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg",
        emoji: "⚡",
        description: "Join your friends in a brand new 5v5 MOBA showdown against real human opponents, Mobile Legends: Bang Bang! Choose your favorite heroes and build the perfect team with your comrades-in-arms!",
        requirements: "iOS 9.0+, Android 4.1+, 2GB RAM, 3GB storage space",
        downloadUrl: "https://m.mobilelegends.com/",
        downloads: 18000000
    }
];

// DOM elements
const gamesGrid = document.getElementById('gamesGrid');
const gameModal = document.getElementById('gameModal');
const ratingModal = document.getElementById('ratingModal');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentGame = null;
let currentFilter = 'all';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    setupEventListeners();
    animateOnLoad();
});

// Render games based on current filter
function renderGames() {
    const filteredGames = currentFilter === 'all' 
        ? gamesData 
        : gamesData.filter(game => game.platform.toLowerCase() === currentFilter);
    
    gamesGrid.innerHTML = '';
    
    filteredGames.forEach((game, index) => {
        const gameCard = createGameCard(game);
        gameCard.style.opacity = '0';
        gameCard.style.transform = 'translateY(30px)';
        gamesGrid.appendChild(gameCard);
        
        // Animate card appearance
        setTimeout(() => {
            gameCard.style.transition = 'all 0.5s ease';
            gameCard.style.opacity = '1';
            gameCard.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Simplified image handling - emoji fallback only

// Create game card HTML - simplified image handling
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.gameId = game.id;
    
    const starsHtml = generateStars(game.rating);
    
    card.innerHTML = `
        <div class="game-image">
            <img src="${game.image}" 
                 alt="${game.title}" 
                 onload="this.style.display='block';"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="game-emoji-fallback" style="display:none;">
                <span class="fallback-emoji">${game.emoji}</span>
                <span class="fallback-title">${game.title}</span>
            </div>
        </div>
        <h3 class="game-title">${game.title}</h3>
        <div class="game-genre">${game.genre}</div>
        <span class="game-platform">${game.platform}</span>
        <div class="game-rating">
            <div class="stars">${starsHtml}</div>
            <span>${game.rating}/5 (${formatNumber(game.downloads)} downloads)</span>
        </div>
        <p class="game-description">${game.description}</p>
        <div class="game-actions">
            <button class="btn btn-primary" onclick="openGameModal(${game.id})">
                <i class="fas fa-info-circle"></i> View Details
            </button>
            <button class="btn btn-secondary" onclick="quickDownload('${game.downloadUrl}')">
                <i class="fas fa-download"></i> Quick Download
            </button>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

// Format large numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Utility function to create image with loading state
function createImageWithFallback(src, alt, emoji, className = '') {
    return `
        <div class="image-container ${className}">
            <div class="image-loading">
                <i class="fas fa-spinner fa-spin"></i>
                <span>Loading...</span>
            </div>
            <img src="${src}" 
                 alt="${alt}" 
                 onload="this.parentElement.querySelector('.image-loading').style.display='none'; this.style.display='block';"
                 onerror="this.parentElement.querySelector('.image-loading').style.display='none'; this.nextElementSibling.style.display='flex'; this.style.display='none';">
            <div class="image-fallback" style="display:none;">
                <span class="fallback-emoji">${emoji}</span>
                <span class="fallback-text">Image unavailable</span>
            </div>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderGames();
        });
    });
    
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModals);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === gameModal || e.target === ratingModal) {
            closeModals();
        }
    });
    
    // Rating stars
    setupRatingStars();
    
    // Submit rating
    document.getElementById('submitRating').addEventListener('click', submitRating);
}

// Open game details modal
function openGameModal(gameId) {
    currentGame = gamesData.find(game => game.id === gameId);
    if (!currentGame) return;
    
    // Create fallback image URL for modal
    const modalFallbackImage = `https://via.placeholder.com/200x150/8338ec/ffffff?text=${encodeURIComponent(currentGame.title)}`;
    
    // Populate modal content
    const modalImage = document.getElementById('modalImage');
    modalImage.src = currentGame.image;
    modalImage.alt = currentGame.title;
    modalImage.onerror = function() {
        this.onerror = null;
        this.src = modalFallbackImage;
    };
    
    document.getElementById('modalTitle').textContent = currentGame.title;
    document.getElementById('modalPlatform').textContent = currentGame.platform;
    document.getElementById('modalGenre').textContent = currentGame.genre;
    document.getElementById('modalStars').innerHTML = generateStars(currentGame.rating);
    document.getElementById('modalRatingText').textContent = `${currentGame.rating}/5 (${formatNumber(currentGame.downloads)} downloads)`;
    document.getElementById('modalDescription').textContent = currentGame.description;
    document.getElementById('modalRequirements').textContent = currentGame.requirements;
    
    // Setup modal buttons
    document.getElementById('downloadBtn').onclick = () => downloadGame(currentGame.downloadUrl);
    document.getElementById('rateBtn').onclick = openRatingModal;
    
    // Show modal with animation
    gameModal.style.display = 'block';
    gameModal.querySelector('.modal-content').style.transform = 'scale(0.7) translateY(-50px)';
    gameModal.querySelector('.modal-content').style.opacity = '0';
    
    setTimeout(() => {
        gameModal.querySelector('.modal-content').style.transition = 'all 0.3s ease';
        gameModal.querySelector('.modal-content').style.transform = 'scale(1) translateY(0)';
        gameModal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

// Open rating modal
function openRatingModal() {
    gameModal.style.display = 'none';
    ratingModal.style.display = 'block';
    
    // Reset rating stars
    document.querySelectorAll('.rating-star').forEach(star => {
        star.classList.remove('active');
    });
    document.getElementById('reviewText').value = '';
}

// Setup rating stars functionality
function setupRatingStars() {
    const ratingStars = document.querySelectorAll('.rating-star');
    
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
            ratingStars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        star.addEventListener('mouseenter', () => {
            ratingStars.forEach((s, i) => {
                if (i <= index) {
                    s.style.color = '#ffd700';
                } else {
                    s.style.color = '#666';
                }
            });
        });
    });
    
    document.querySelector('.rating-stars').addEventListener('mouseleave', () => {
        ratingStars.forEach(star => {
            if (star.classList.contains('active')) {
                star.style.color = '#ffd700';
            } else {
                star.style.color = '#666';
            }
        });
    });
}

// Submit rating
function submitRating() {
    const activeStars = document.querySelectorAll('.rating-star.active').length;
    const review = document.getElementById('reviewText').value;
    
    if (activeStars === 0) {
        alert('Please select a rating!');
        return;
    }
    
    // Simulate API call
    setTimeout(() => {
        alert(`Thank you for rating ${currentGame.title}! Your ${activeStars}-star rating has been submitted.`);
        closeModals();
    }, 500);
}

// Download game
function downloadGame(url) {
    // Show download confirmation
    const confirmed = confirm(`This will redirect you to the official download page for ${currentGame.title}. Continue?`);
    if (confirmed) {
        window.open(url, '_blank');
    }
}

// Quick download
function quickDownload(url) {
    window.open(url, '_blank');
}

// Close all modals
function closeModals() {
    gameModal.style.display = 'none';
    ratingModal.style.display = 'none';
}

// Animate elements on page load
function animateOnLoad() {
    // Animate navigation
    const navbar = document.querySelector('.navbar');
    navbar.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        navbar.style.transition = 'transform 0.5s ease';
        navbar.style.transform = 'translateY(0)';
    }, 100);
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';
    setTimeout(() => {
        heroContent.style.transition = 'all 0.8s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
    
    // Animate section title
    const sectionTitle = document.querySelector('.games-section h2');
    setTimeout(() => {
        sectionTitle.style.opacity = '0';
        sectionTitle.style.transform = 'translateX(-50px)';
        sectionTitle.style.transition = 'all 0.6s ease';
        setTimeout(() => {
            sectionTitle.style.opacity = '1';
            sectionTitle.style.transform = 'translateX(0)';
        }, 100);
    }, 800);
}

// Add some gaming-style console messages
console.log(`
🎮 Welcome to GameZone Portal! 🎮
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 System Status: Online
🎯 Games Loaded: ${gamesData.length}
�️  Real Game Images: Enabled
�🔥 Ready for Epic Gaming!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modals
    if (e.key === 'Escape') {
        closeModals();
    }
    
    // Number keys to filter
    if (e.key >= '1' && e.key <= '3') {
        const filters = ['all', 'pc', 'mobile'];
        const filterIndex = parseInt(e.key) - 1;
        if (filters[filterIndex]) {
            document.querySelector(`[data-filter="${filters[filterIndex]}"]`).click();
        }
    }
});

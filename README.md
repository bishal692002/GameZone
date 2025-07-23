# 🎮 GameZone Portal

A modern, gaming-themed Node.js web application showcasing the latest PC and mobile games with rating systems, download links, and interactive features.

## ✨ Features

- **Modern Gaming UI** - Dark theme with gaming aesthetics and animations
- **Game Discovery** - Browse latest PC and mobile games
- **Rating System** - Rate games and write reviews
- **Platform Filtering** - Filter by PC, Mobile, or All games
- **Interactive Modals** - Detailed game information and rating interface
- **Responsive Design** - Works seamlessly on desktop and mobile
- **API Integration Ready** - Configured for Steam, RAWG, and other gaming APIs
- **EC2 Ready** - Production-ready deployment configuration

## 🚀 Quick Start

### Local Development

1. **Clone and Setup:**
   ```bash
   git clone <your-repo>
   cd gamezone-portal
   npm install
   ```

2. **Environment Configuration:**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

3. **Start Development Server:**
   ```bash
   npm start
   ```

4. **Access the Application:**
   Open `http://localhost:3000` in your browser

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

### Required Variables
```bash
# Server Configuration
PORT=3000
NODE_ENV=development

# API Keys (get from respective services)
STEAM_API_KEY=your_steam_api_key_here
RAWG_API_KEY=your_rawg_api_key_here
GOOGLE_PLAY_API_KEY=your_google_play_api_key_here
```

### Optional Variables
```bash
# Database (when you add one)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gamezone
DB_USER=admin
DB_PASSWORD=your_secure_password

# Security
JWT_SECRET=your_super_secure_jwt_secret_here
SESSION_SECRET=your_session_secret_here

# Analytics
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

### 🔑 Getting API Keys

1. **Steam API Key:**
   - Visit: https://steamcommunity.com/dev/apikey
   - Sign in with Steam account
   - Register your domain

2. **RAWG API Key:**
   - Visit: https://rawg.io/apidocs
   - Create free account
   - Get API key from dashboard

3. **Google Play API:**
   - Visit: https://developers.google.com/android-publisher
   - Follow setup instructions

## 🌐 EC2 Deployment

### Prerequisites
- EC2 instance (Amazon Linux recommended)
- Key pair (.pem file)
- Security group allowing inbound traffic on port 3000

### 1. Configure Environment
```bash
# Edit .env with production values
cp .env.example .env
# Update NODE_ENV=production
# Add your API keys
```

### 2. Deploy with Script
```bash
chmod +x deploy.sh
./deploy.sh YOUR_EC2_IP YOUR_KEY.pem production
```

### 3. Manual Deployment Steps

1. **Connect to EC2:**
   ```bash
   ssh -i your-key.pem ec2-user@your-ec2-ip
   ```

2. **Install Node.js:**
   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo yum install -y nodejs
   ```

3. **Upload Files:**
   ```bash
   scp -i your-key.pem -r . ec2-user@your-ec2-ip:~/gamezone-portal
   ```

4. **Install Dependencies:**
   ```bash
   cd ~/gamezone-portal
   npm install --only=production
   ```

5. **Setup Process Manager:**
   ```bash
   sudo npm install -g pm2
   pm2 start server.js --name gamezone-portal
   pm2 startup
   pm2 save
   ```

### 4. Security Group Configuration

Allow these inbound rules:
- **HTTP**: Port 80 from 0.0.0.0/0
- **Custom TCP**: Port 3000 from 0.0.0.0/0
- **SSH**: Port 22 from your IP

## 📡 API Endpoints

### Public Endpoints
- `GET /` - Main application page
- `GET /api/hello` - Welcome message with system info
- `GET /api/info` - Server information
- `GET /api/stats` - Gaming portal statistics
- `GET /api/health` - Health check

### Game Management
- `POST /api/games/:gameId/rate` - Submit game rating
- `GET /api/games/:gameId/ratings` - Get game ratings
- `GET /api/search` - Search games
- `GET /api/trending` - Get trending games

### Example API Usage
```javascript
// Rate a game
fetch('/api/games/1/rate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ rating: 5, review: 'Amazing game!' })
});

// Search games
fetch('/api/search?query=cyberpunk&platform=pc')
  .then(res => res.json())
  .then(data => console.log(data));
```

## 🛠️ Development

### File Structure
```
gamezone-portal/
├── server.js              # Express server
├── package.json           # Dependencies
├── .env                   # Environment variables (create from .env.example)
├── .env.example          # Environment template
├── deploy.sh             # EC2 deployment script
├── public/               # Static assets
│   ├── index.html        # Main HTML page
│   ├── styles.css        # Gaming-themed CSS
│   └── script.js         # Interactive JavaScript
└── README.md             # This file
```

### Key Technologies
- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla JavaScript, CSS3, HTML5
- **Icons**: Font Awesome
- **Deployment**: PM2, EC2
- **Environment**: dotenv

### Development Commands
```bash
npm start              # Start development server
npm install            # Install dependencies
pm2 status            # Check production processes
pm2 logs gamezone-portal  # View application logs
pm2 restart gamezone-portal  # Restart application
```

## 🎨 Customization

### Adding New Games
Edit the `gamesData` array in `public/script.js`:

```javascript
{
  id: 9,
  title: "Your Game Title",
  genre: "Action RPG",
  platform: "PC",
  rating: 4.5,
  image: "🎮",
  description: "Game description...",
  requirements: "System requirements...",
  downloadUrl: "https://store.steampowered.com/...",
  downloads: 1000000
}
```

### Styling Changes
- Edit `public/styles.css` for visual customization
- Colors use CSS custom properties for easy theming
- Responsive design uses CSS Grid and Flexbox

### API Integration
- Add new endpoints in `server.js`
- Use environment variables for API keys
- Follow REST conventions

## 🚨 Troubleshooting

### Common Issues

1. **Port 3000 in use:**
   ```bash
   export PORT=3001
   npm start
   ```

2. **Missing environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. **PM2 not starting:**
   ```bash
   pm2 kill
   pm2 start server.js --name gamezone-portal
   ```

4. **Can't access from browser on EC2:**
   - Check security group allows port 3000
   - Verify server binds to 0.0.0.0, not localhost

### Monitoring

```bash
# Check server status
pm2 status

# View real-time logs
pm2 logs gamezone-portal --lines 50

# Monitor resources
pm2 monit

# Restart if needed
pm2 restart gamezone-portal
```

## 📈 Performance & Scaling

### Optimization Tips
- Use PM2 cluster mode for multiple processes
- Implement Redis for session storage
- Add CDN for static assets
- Use database for persistent data
- Implement caching strategies

### Scaling on AWS
- Use Application Load Balancer
- Auto Scaling Groups
- RDS for database
- ElastiCache for Redis
- CloudFront for CDN

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎮 Game On!

Your GameZone Portal is ready to showcase amazing games and provide an incredible user experience. Happy gaming! 🚀

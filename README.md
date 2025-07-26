# 🎮 GameZone Portal – Cloud-Hosted Gaming Hub

A full-stack Node.js gaming portal deployed on AWS EC2, featuring automated deployment scripts, secure cloud infrastructure, and interactive gaming features. This project demonstrates cloud deployment expertise, full-stack development capabilities, and modern DevOps practices.

## 🚀 Project Overview

- **Cloud Deployment**: Node.js application deployed on AWS EC2 with automated Shell scripts
- **Security Configuration**: EC2 Security Groups configured to control inbound and outbound traffic  
- **Game Rating System**: Interactive star-based rating system to enhance user engagement
- **Platform Filtering**: Dynamic filtering by PC, Mobile, and Console platforms
- **Responsive Frontend**: HTML/CSS/JavaScript frontend seamlessly integrated with Node.js backend
- **Full-Stack Architecture**: Complete demonstration of frontend-backend integration capabilities

## 🛠️ Technologies Used

- **Cloud Platform**: AWS EC2
- **Operating System**: Linux (Ubuntu)  
- **Automation**: Shell Scripting for deployment
- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Process Management**: PM2
- **Version Control**: Git & GitHub

## 🎯 Key Features

### 🎮 Gaming Portal Interface
- **Interactive Game Library**: Curated collection of 12 popular games across platforms
- **Star Rating System**: User-driven 5-star rating system with real-time feedback
- **Platform-Based Filtering**: Dynamic filtering by PC, Mobile, Console, or All Games
- **Responsive Design**: Mobile-optimized interface with smooth animations
- **Game Details Modal**: Comprehensive game information with download links

### ☁️ Cloud Infrastructure  
- **AWS EC2 Deployment**: Production-ready hosting on Amazon Web Services
- **Automated Setup**: Shell scripts for streamlined Ubuntu server configuration
- **Security Groups**: Properly configured inbound/outbound traffic rules
- **Process Management**: PM2 integration for application monitoring and auto-restart
- **Environment Configuration**: Secure environment variable management

### 🔧 Technical Implementation
- **Full-Stack Architecture**: Node.js backend with HTML/CSS/JS frontend
- **RESTful API**: Clean API endpoints for game ratings and data management  
- **Error Handling**: Graceful error handling and fallback systems
- **Production Ready**: Optimized for cloud deployment and scaling

## � Quick Start

### Local Development
```bash
# Clone and install dependencies
git clone https://github.com/bishal692002/GameZone.git
cd GameZone
npm install

# Setup environment
cp .env.example .env

# Start the server
npm start
```

Access the application at `http://localhost:3000`

## ☁️ AWS EC2 Deployment

### Prerequisites
- AWS EC2 instance (Ubuntu recommended)
- Key pair (.pem file) for SSH access
- Security Group configured for HTTP traffic

### Automated Deployment
```bash
# Make deployment script executable
chmod +x deploy.sh

# Deploy to EC2 (replace with your details)
./deploy.sh YOUR_EC2_IP YOUR_KEY.pem production
```

### Manual Deployment Steps

1. **Connect to EC2 Instance**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   ```

2. **Server Setup** (automated by deploy.sh)
   ```bash
   # Update system packages
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2 globally
   sudo npm install -g pm2
   ```

3. **Application Deployment**
   ```bash
   # Upload project files
   scp -i your-key.pem -r . ubuntu@your-ec2-ip:~/gamezone-portal
   
   # Install dependencies
   cd ~/gamezone-portal
   npm install --only=production
   
   # Start with PM2
   pm2 start server.js --name gamezone-portal
   pm2 startup
   pm2 save
   ```

### Security Group Configuration
Configure your EC2 Security Group with these inbound rules:
- **HTTP**: Port 80 from 0.0.0.0/0
- **Custom TCP**: Port 3000 from 0.0.0.0/0  
- **SSH**: Port 22 from your IP address

## � Project Architecture

```
GameZone/
├── server.js              # Express.js backend server
├── package.json           # Node.js dependencies and scripts
├── .env.example          # Environment variables template
├── deploy.sh             # AWS EC2 deployment automation script
├── public/               # Frontend static files
│   ├── index.html        # Main HTML page
│   ├── styles.css        # Responsive CSS styling
│   └── script.js         # Interactive JavaScript
└── README.md             # Project documentation
```

## 🎮 Gaming Features

### Game Database
The portal showcases 12 carefully curated games across different platforms:

**PC Games**: Cyberpunk 2077, Baldur's Gate 3, Starfield, The Witcher 3  
**Mobile Games**: Genshin Impact, Call of Duty Mobile, PUBG Mobile, Among Us, Mobile Legends  
**Console Games**: Hogwarts Legacy, Minecraft, GTA V

### Interactive Elements
- **Star Rating System**: Users can rate games from 1-5 stars
- **Platform Filtering**: Dynamic filtering buttons (All, PC, Mobile, Console)
- **Game Details Modal**: Detailed information with download links
- **Responsive Cards**: Smooth hover effects and animations

## � Development & Monitoring

### Local Development Commands
```bash
npm start                    # Start development server
npm install                  # Install all dependencies
```

### Production Monitoring (EC2)
```bash
pm2 status                   # Check application status
pm2 logs gamezone-portal     # View application logs
pm2 restart gamezone-portal  # Restart application
pm2 monit                    # Real-time monitoring dashboard
```

## 🔧 Environment Configuration

Create a `.env` file with basic configuration:

```bash
# Server Configuration
PORT=3000
NODE_ENV=production

# Optional for future enhancements
STEAM_API_KEY=your_steam_key_here
RAWG_API_KEY=your_rawg_key_here
```

## 🚨 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Kill existing Node.js processes
sudo pkill node
# Or use different port
export PORT=3001 && npm start
```

**EC2 Access Issues:**
- Verify Security Group allows inbound traffic on port 3000
- Check that server binds to `0.0.0.0`, not `localhost`
- Ensure SSH key permissions: `chmod 400 your-key.pem`

**PM2 Process Issues:**
```bash
pm2 kill                     # Stop all PM2 processes
pm2 start server.js --name gamezone-portal  # Restart application
```

## 📈 Future Enhancements

- **Database Integration**: PostgreSQL/MongoDB for persistent game data and user ratings
- **User Authentication**: Login system with personalized game recommendations  
- **API Integration**: Steam API, RAWG API for real-time game data and pricing
- **Advanced Features**: Game search, user reviews, wishlist functionality
- **Scaling**: Load balancer, auto-scaling groups, and CDN integration
- **Mobile App**: React Native mobile application

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🎮 Live Demo

**🌐 Live Application**: Access the deployed GameZone Portal on AWS EC2  
**🔗 GitHub Repository**: [https://github.com/bishal692002/GameZone](https://github.com/bishal692002/GameZone)

---

**🚀 Showcasing cloud deployment expertise, full-stack development skills, and modern DevOps practices through an engaging gaming portal experience.**

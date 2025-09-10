// Image Optimization Script for Better Performance
// Run this before deploying to Hostinger

const fs = require('fs');
const path = require('path');

console.log('🚀 Image Optimization Recommendations:');
console.log('');

// Check public folder for large files
const publicDir = path.join(__dirname, 'public');

function checkFileSize(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      checkFileSize(fullPath, relativePath);
    } else {
      const sizeInMB = stats.size / (1024 * 1024);
      
      if (sizeInMB > 1) {
        console.log(`⚠️  Large file: ${relativePath} (${sizeInMB.toFixed(2)}MB)`);
        
        if (item.endsWith('.mp4')) {
          console.log(`   → Consider converting to WebM or reducing quality`);
        } else if (item.endsWith('.png') || item.endsWith('.jpg')) {
          console.log(`   → Consider converting to WebP format`);
        }
      }
    }
  });
}

checkFileSize(publicDir);

console.log('');
console.log('📋 Performance Tips:');
console.log('1. Convert large images to WebP format');
console.log('2. Compress videos to under 5MB');
console.log('3. Use lazy loading for images below the fold');
console.log('4. Enable gzip compression on Hostinger');
console.log('5. Use a CDN for static assets');
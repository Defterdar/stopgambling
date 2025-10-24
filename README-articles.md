# Article Management System for Stop Gambling

## 📁 Files Overview

- **`articles.json`** - Contains all article data in JSON format
- **`articles.js`** - JavaScript that loads and displays articles on the press page
- **`admin.html`** - Easy-to-use form for creating new article entries
- **`presse.html`** - Updated to use the new dynamic system

## ✨ How to Add New Articles

### Method 1: Using the Admin Interface (Recommended)
1. Open `admin.html` in your browser
2. Fill out the form with article details
3. Click "Generer JSON" to create formatted data
4. Copy the generated JSON
5. Edit `articles.json` and add the new article to the appropriate section
6. Save the file - new articles will appear automatically

### Method 2: Direct JSON Editing
1. Open `articles.json` in a text editor
2. Add new article objects to either "nyheder" or "dokumenter" array
3. Use this format:
```json
{
  "title": "Article title",
  "date": "2025-10-24",
  "source": "Source name",
  "summary": "Article summary text...",
  "url": "https://article-link.com"
}
```

## 🎯 Benefits of This System

- **Easy updates**: Just edit one JSON file instead of HTML
- **Consistent formatting**: All articles use the same template
- **Fast loading**: Articles load dynamically
- **SEO friendly**: Content is loaded on page load
- **Mobile optimized**: Responsive design built-in
- **Error handling**: Shows fallback message if data fails to load

## 📝 JSON Structure

```json
{
  "nyheder": [
    // News articles array - newest first
  ],
  "dokumenter": [
    // Government documents array - newest first
  ]
}
```

## 🔧 Technical Details

- Articles are sorted by date automatically (newest first)
- Danish date formatting is applied automatically
- External links open in new tabs
- Loading states shown while data loads
- Graceful fallback if JSON loading fails

## 💡 Pro Tips

1. **Add new articles at the top** of the respective arrays for chronological order
2. **Use consistent date format**: YYYY-MM-DD (e.g., 2025-10-24)
3. **Keep summaries concise** but informative (2-3 sentences)
4. **Test JSON syntax** after editing to avoid errors
5. **Backup articles.json** before making major changes

## 🚀 Future Enhancements

This system can easily be extended with:
- Search functionality
- Category filtering
- Pagination for large article lists
- RSS feed generation
- Admin authentication
- Database integration
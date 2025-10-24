// Article management system for Stop Gambling
class ArticleManager {
  constructor() {
    this.articles = null;
    this.loadArticles();
  }

  async loadArticles() {
    try {
      const response = await fetch('/articles.json');
      this.articles = await response.json();
      this.renderArticles();
    } catch (error) {
      console.error('Failed to load articles:', error);
      // Fallback to show a message if JSON loading fails
      document.getElementById('articles-container').innerHTML = 
        '<p>Kunne ikke indlæse artikler. Prøv at genindlæse siden.</p>';
    }
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  createArticleHTML(article) {
    return `
      <article style="border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:16px;margin-bottom:20px;">
        <h3 style="color:var(--accent2);margin:0 0 8px;">${article.title}</h3>
        <p style="color:var(--muted);font-size:14px;margin:0 0 8px;">${this.formatDate(article.date)} • ${article.source}</p>
        <p style="margin:0 0 12px;">${article.summary}</p>
        <a href="${article.url}" target="_blank" rel="noopener" class="bt ghost" style="font-size:12px;padding:8px 12px;">Læs mere</a>
      </article>
    `;
  }

  renderArticles() {
    if (!this.articles) return;

    // Render news articles
    const nyhedContainer = document.getElementById('nyheder-container');
    if (nyhedContainer && this.articles.nyheder) {
      nyhedContainer.innerHTML = this.articles.nyheder.map(article => 
        this.createArticleHTML(article)
      ).join('');
    }

    // Render documents
    const dokumentContainer = document.getElementById('dokumenter-container');
    if (dokumentContainer && this.articles.dokumenter) {
      dokumentContainer.innerHTML = this.articles.dokumenter.map(article => 
        this.createArticleHTML(article)
      ).join('');
    }
  }

  // Method to add new article (for future admin interface)
  addArticle(type, articleData) {
    if (!this.articles) return false;
    
    if (type === 'nyheder' || type === 'dokumenter') {
      this.articles[type].unshift(articleData); // Add to beginning of array
      this.renderArticles();
      return true;
    }
    return false;
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  window.articleManager = new ArticleManager();
});

// Helper function to easily add new articles from console (for development)
window.addNewArticle = function(type, title, date, source, summary, url) {
  const articleData = {
    title,
    date,
    source,
    summary,
    url
  };
  
  if (window.articleManager) {
    const success = window.articleManager.addArticle(type, articleData);
    if (success) {
      console.log(`Article added to ${type}:`, articleData);
    } else {
      console.error('Failed to add article');
    }
  }
};
// Share functionality for STOP GAMBLING NU website
(function() {
  'use strict';
  
  function shareWebsite() {
    const shareData = {
      title: 'STOP GAMBLING NU - Tag kontrollen tilbage',
      text: 'Online gambling er designet til at fastholde dig. Få konkrete handlinger og hjælp til at stoppe.',
      url: window.location.origin
    };
    
    // Check if native Web Share API is available (mobile browsers)
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: Show share options modal
      showShareModal();
    }
  }
  
  function showShareModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('share-modal');
    if (!modal) {
      modal = createShareModal();
      document.body.appendChild(modal);
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
  
  function hideShareModal() {
    const modal = document.getElementById('share-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Restore scrolling
    }
  }
  
  function createShareModal() {
    const modal = document.createElement('div');
    modal.id = 'share-modal';
    modal.innerHTML = `
      <div class="share-modal-overlay" onclick="hideShareModal()"></div>
      <div class="share-modal-content">
        <div class="share-modal-header">
          <h3>📢 Del siden</h3>
          <button class="share-modal-close" onclick="hideShareModal()" aria-label="Luk">&times;</button>
        </div>
        <div class="share-modal-body">
          <p>Hjælp med at sprede kendskabet til hjælp mod spilafhængighed:</p>
          <div class="share-options">
            <button class="share-option" onclick="shareToFacebook()">
              <span class="share-icon">📘</span>
              Facebook
            </button>
            <button class="share-option" onclick="shareToTwitter()">
              <span class="share-icon">🐦</span>
              Twitter/X
            </button>
            <button class="share-option" onclick="shareToLinkedIn()">
              <span class="share-icon">💼</span>
              LinkedIn
            </button>
            <button class="share-option" onclick="shareToWhatsApp()">
              <span class="share-icon">💬</span>
              WhatsApp
            </button>
            <button class="share-option" onclick="shareToTelegram()">
              <span class="share-icon">✈️</span>
              Telegram
            </button>
            <button class="share-option" onclick="copyToClipboard()">
              <span class="share-icon">📋</span>
              Kopier link
            </button>
          </div>
        </div>
      </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      #share-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(4px);
      }
      
      .share-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      
      .share-modal-content {
        background: var(--panel);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 16px;
        padding: 0;
        max-width: 400px;
        width: 90%;
        position: relative;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      }
      
      .share-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }
      
      .share-modal-header h3 {
        margin: 0;
        color: var(--accent2);
        font-size: 18px;
      }
      
      .share-modal-close {
        background: none;
        border: none;
        color: var(--muted);
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s ease;
      }
      
      .share-modal-close:hover {
        background: rgba(255,255,255,0.1);
        color: var(--text);
      }
      
      .share-modal-body {
        padding: 20px 24px;
      }
      
      .share-modal-body p {
        margin: 0 0 20px;
        color: var(--muted);
        text-align: center;
      }
      
      .share-options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      
      .share-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        color: var(--text);
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 14px;
        font-family: inherit;
      }
      
      .share-option:hover {
        background: rgba(255,255,255,0.1);
        border-color: var(--accent);
        transform: translateY(-2px);
      }
      
      .share-icon {
        font-size: 16px;
      }
      
      @media (max-width: 480px) {
        .share-options {
          grid-template-columns: 1fr;
        }
      }
    `;
    
    document.head.appendChild(style);
    return modal;
  }
  
  // Share functions for different platforms
  function shareToFacebook() {
    const url = encodeURIComponent(window.location.origin);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
  }
  
  function shareToTwitter() {
    const text = encodeURIComponent('Online gambling er designet til at fastholde dig. Få hjælp til at stoppe på');
    const url = encodeURIComponent(window.location.origin);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400');
  }
  
  function shareToLinkedIn() {
    const url = encodeURIComponent(window.location.origin);
    const title = encodeURIComponent('STOP GAMBLING NU - Tag kontrollen tilbage');
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank', 'width=600,height=400');
  }
  
  function shareToWhatsApp() {
    const text = encodeURIComponent('Online gambling er designet til at fastholde dig. Få hjælp til at stoppe: ' + window.location.origin);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }
  
  function shareToTelegram() {
    const text = encodeURIComponent('Online gambling er designet til at fastholde dig. Få hjælp til at stoppe');
    const url = encodeURIComponent(window.location.origin);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
  
  function copyToClipboard() {
    const textToCopy = `STOP GAMBLING NU - Online gambling er designet til at fastholde dig. Få hjælp til at stoppe: ${window.location.origin}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          showCopySuccess();
        })
        .catch((error) => {
          console.error('Failed to copy to clipboard:', error);
          fallbackCopyToClipboard(textToCopy);
        });
    } else {
      fallbackCopyToClipboard(textToCopy);
    }
  }
  
  function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      showCopySuccess();
    } catch (error) {
      console.error('Fallback copy failed:', error);
      alert('Kunne ikke kopiere automatisk. Kopiér venligst linket manuelt: ' + window.location.origin);
    }
    
    document.body.removeChild(textArea);
  }
  
  function showCopySuccess() {
    // Find the copy button and show success state
    const copyButton = document.querySelector('.share-option:last-child');
    if (copyButton) {
      const originalText = copyButton.innerHTML;
      copyButton.innerHTML = '<span class="share-icon">✅</span> Kopieret!';
      copyButton.style.background = 'rgba(34, 211, 238, 0.2)';
      copyButton.style.borderColor = 'var(--accent)';
      
      setTimeout(() => {
        copyButton.innerHTML = originalText;
        copyButton.style.background = '';
        copyButton.style.borderColor = '';
      }, 2000);
    }
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hideShareModal();
    }
  });
  
  // Make functions globally available
  window.shareWebsite = shareWebsite;
  window.hideShareModal = hideShareModal;
  window.shareToFacebook = shareToFacebook;
  window.shareToTwitter = shareToTwitter;
  window.shareToLinkedIn = shareToLinkedIn;
  window.shareToWhatsApp = shareToWhatsApp;
  window.shareToTelegram = shareToTelegram;
  window.copyToClipboard = copyToClipboard;
})();
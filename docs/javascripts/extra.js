// Additional JavaScript for enhanced functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scroll to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#__tabbed_1_1') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add animation to practice questions when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        
        requestAnimationFrame(() => {
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe practice questions and resources sections
  document.querySelectorAll('.practice-questions, .resources-section').forEach(el => {
    observer.observe(el);
  });

  // Add print functionality
  const printButton = document.querySelector('[data-print]');
  if (printButton) {
    printButton.addEventListener('click', () => {
      window.print();
    });
  }

  // Enhance external links
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Add icon to external links if not already present
      if (!link.querySelector('.external-link-icon')) {
        const icon = document.createElement('span');
        icon.className = 'external-link-icon';
        icon.innerHTML = ' ↗';
        icon.style.fontSize = '0.8em';
        link.appendChild(icon);
      }
    }
  });

  // Add copy button functionality for code blocks (if not already handled by theme)
  document.querySelectorAll('pre > code').forEach((codeBlock) => {
    const pre = codeBlock.parentElement;
    if (!pre.querySelector('.copy-button')) {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copy';
      button.style.cssText = 'position: absolute; top: 8px; right: 8px; padding: 4px 8px; border-radius: 4px;';
      
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(codeBlock.textContent);
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text:', err);
        }
      });
      
      pre.style.position = 'relative';
      pre.appendChild(button);
    }
  });
});

// Handle theme toggle persistence
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
prefersDark.addEventListener('change', (e) => {
  // Theme is automatically handled by Material for MkDocs
  console.log('Theme preference changed:', e.matches ? 'dark' : 'light');
});

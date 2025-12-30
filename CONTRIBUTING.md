# Contributing to Applied Skills - Computer Vision

Thank you for your interest in contributing to this project! This document provides guidelines for contributing to the Applied Skills - Computer Vision learning resource.

## Ways to Contribute

There are many ways you can contribute to this project:

- **Report Issues**: Found a bug or error? Open an issue
- **Suggest Improvements**: Have ideas for new content or features? Share them
- **Fix Typos**: Spotted a typo? Submit a pull request
- **Add Examples**: Contribute additional code examples
- **Improve Documentation**: Enhance explanations or add missing information
- **Translate Content**: Help make the content accessible in other languages

## Getting Started

1. **Fork the Repository**
   ```bash
   git clone https://github.com/codess-aus/Applied-Skills-Computer-Vision.git
   cd Applied-Skills-Computer-Vision
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Edit the Markdown files in the `docs/` directory
   - Follow the existing structure and style
   - Test your changes locally with `mkdocs serve`

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

6. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Go to the repository on GitHub
   - Click "Pull Request"
   - Provide a clear description of your changes

## Content Guidelines

### Writing Style

- Use clear, concise language
- Write in second person ("you") to address the reader
- Use active voice
- Break complex topics into digestible sections
- Include practical examples

### Code Examples

- Provide complete, runnable code snippets
- Use Python as the primary language
- Include comments to explain key concepts
- Follow PEP 8 style guidelines for Python
- Test all code examples before submitting

### Structure for New Chapters

Each chapter should include:

1. **Hero Section**: Visual introduction with title and subtitle
2. **Overview**: Brief introduction to the topic
3. **Topic Notes**: Detailed explanations with subsections
4. **Key Capabilities**: Feature descriptions
5. **Best Practices**: Tips and recommendations
6. **Use Cases**: Real-world applications
7. **Practice Questions**: Self-assessment with answers
8. **Hands-On Exercise**: Practical implementation task
9. **Resources**: Links to documentation and materials

### Markdown Formatting

```markdown
# Chapter Title

<div class="hero-section">
  <div class="hero-overlay">
    <div class="hero-content">
      <h1>Chapter Title</h1>
      <p>Brief description</p>
    </div>
  </div>
</div>

## Overview

Content here...

### Subsection

More content...

!!! tip "Helpful Tip"
    Tip content here

!!! warning "Important Warning"
    Warning content here

<div class="practice-questions">

### 🎯 Practice Questions

1. **Question text?**
   
   <details>
   <summary>Show Answer</summary>
   Answer text here
   </details>

</div>

<div class="resources-section">

## 📚 Resources

- [Link Text](URL)

</div>
```

## Testing

Before submitting a pull request:

1. **Build the site**
   ```bash
   mkdocs build --strict
   ```
   This should complete without errors.

2. **Test locally**
   ```bash
   mkdocs serve
   ```
   Navigate to `http://localhost:8000` and verify your changes.

3. **Check links**: Ensure all links work correctly

4. **Test responsiveness**: Check on different screen sizes

5. **Verify accessibility**: Ensure content is accessible

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the content, not the person
- Welcome newcomers
- Help others learn

## Questions?

If you have questions about contributing:

- Open an issue with the "question" label
- Check existing issues for similar questions
- Review the documentation in the `docs/` directory

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

## Recognition

Contributors will be acknowledged in the project. Thank you for helping make this resource better for everyone!

---

Happy contributing! 🎉

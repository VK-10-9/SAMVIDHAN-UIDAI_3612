# 👥 Contributors & Team

> **The talented team behind SAMVIDHAN - India's Aadhaar Intelligence Platform**

---

## 🌟 Core Team

### Project Leadership & Architecture

#### 1. 👨‍💼 Vishwanath Koliwad - Project Lead & Creator
- **GitHub:** [@VK-10-9](https://github.com/VK-10-9)
- **LinkedIn:** [Vishwanath Koliwad](https://www.linkedin.com/in/vishwanath-koliwad/)
- **Role:** Project Creator & Lead Developer
- **Expertise:** Full-stack architecture, system design, framework design
- **Contributions:**
  - Overall project vision and roadmap
  - Enterprise architecture design
  - 6 Intelligence Frameworks architecture
  - Platform scalability & performance
  - Team leadership and coordination

---

### Full Stack & Backend Development

#### 2. 🔧 Raheel Hosmani - Full Stack Developer
- **GitHub:** [@Raheel-Techz-Life](https://github.com/Raheel-Techz-Life)
- **LinkedIn:** [Raheel Hosmani](https://www.linkedin.com/in/raheel-hosmani-78ab92315/)
- **Role:** Full Stack Developer | Technical Lead
- **Expertise:** FastAPI, Python, async programming, API design, database optimization
- **Contributions:**
  - Core FastAPI backend (40+ endpoints)
  - Async I/O handler architecture
  - CSV database optimization with caching
  - API documentation and validation
  - Server performance optimization

---

### Frontend & UI/UX Development

#### 3. 🎨 Bhumika Dalabhanjan - Frontend Developer & UI/UX Specialist
- **GitHub:** [@bhumika0115](https://github.com/bhumika0115)
- **LinkedIn:** [Bhumika Dalabhanjan](https://www.linkedin.com/in/bhumika-dalabhanjan-047bbb361/)
- **Role:** Frontend Developer | UI/UX Specialist
- **Expertise:** React, Next.js, TypeScript, Tailwind CSS, responsive design, component architecture
- **Contributions:**
  - 6 interactive dashboard pages
  - 100+ React components (Shadcn/UI based)
  - Responsive design (desktop, tablet, mobile)
  - Data visualization (Recharts, Plotly)
  - User experience optimization
  - Accessibility (WCAG 2.1 AA) compliance

---

### Data Engineering & Analytics

#### 4. 📊 Disha Raikar - Data Engineer & Backend Developer
- **GitHub:** [@DishaRaikar15](https://github.com/DishaRaikar15)
- **LinkedIn:** [Disha Raikar](https://www.linkedin.com/in/disha-raikar-4b153335a/)
- **Role:** Data Engineer | Backend Developer
- **Expertise:** Data pipeline, Python, statistical analysis, machine learning, analytics
- **Contributions:**
  - 6 Intelligence Frameworks implementation
  - Data pipeline and ETL processes
  - Anomaly detection algorithms
  - Statistical analysis engine
  - Data quality frameworks
  - Performance analytics

---

## 🤝 How to Contribute

We welcome contributions from the community! Whether you're fixing bugs, adding features, improving documentation, or providing feedback, your contributions help make SAMVIDHAN better.

### Getting Started as a Contributor

1. **Fork the Repository**
   ```bash
   # Visit https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612
   # Click "Fork" button in top-right corner
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/SAMVIDHAN-UIDAI_3612.git
   cd SAMVIDHAN-UIDAI_3612
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes: 
   git checkout -b fix/bug-description
   ```

4. **Set Up Development Environment**
   ```bash
   # Frontend setup
   npm install
   npm run dev
   
   # Backend setup (in new terminal)
   cd backend
   pip install -r requirements-dev.txt
   python main.py
   ```

5. **Make Your Changes**
   - Keep commits atomic and well-documented
   - Follow the code style guides below
   - Test thoroughly before submitting

6. **Commit with Clear Messages**
   ```bash
   git commit -m "feat: add new feature"
   # Or: git commit -m "fix: resolve issue #123"
   ```

7. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Go to GitHub and click "New Pull Request"
   - Select your branch and provide description
   - Link any related issues
   - Await review from team members

---

### Development Setup

**Prerequisites:**
- Node.js 18+
- Python 3.11+
- Git
- npm or pnpm
- VS Code (recommended)

**Quick Setup:**
```bash
# Clone repository
git clone https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612.git
cd SAMVIDHAN-UIDAI_3612

# Install all dependencies
npm install
cd backend && pip install -r requirements-dev.txt && cd ..

# Start both services
# Terminal 1
cd backend && python main.py

# Terminal 2
npm run dev
```

---

### Code Style & Standards

#### Frontend (TypeScript/React)
```bash
# Check code style
npm run lint

# Fix formatting
npm run format

# Type checking
npm run type-check

# Run tests
npm test
```

**Style Guidelines:**
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for formatting
- Functional components with hooks
- Props interfaces for type definitions

#### Backend (Python)
```bash
# Check code style
cd backend && black --check .

# Fix formatting
cd backend && black .

# Linting
cd backend && flake8

# Type checking
cd backend && mypy .

# Run tests
cd backend && pytest
```

**Style Guidelines:**
- Follow PEP 8 standards
- Use type hints for all functions
- Docstrings for modules, classes, functions
- Use Black for formatting
- Async/await for I/O operations

---

### Commit Message Format

We follow conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only
- `style`: Changes that don't affect code meaning
- `refactor`: Code change without new features
- `perf`: Code change that improves performance
- `test`: Adding or updating tests
- `chore`: Dependency updates, build changes

**Examples:**
```bash
git commit -m "feat(dashboard): add state comparison visualization"
git commit -m "fix(api): resolve duplicate records bug"
git commit -m "docs: update API documentation"
git commit -m "refactor(services): simplify anomaly detection logic"
```

---

### Testing

#### Frontend Tests
```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

#### Backend Tests
```bash
# Run tests
cd backend && pytest

# With coverage
cd backend && pytest --cov

# Specific test file
cd backend && pytest tests/test_anomaly.py
```

**Testing Standards:**
- Write tests for new features
- Maintain 80%+ code coverage
- Test edge cases
- Mock external dependencies

---

### Pull Request Process

1. **Before Submitting:**
   - [ ] All tests pass
   - [ ] Code follows style guidelines
   - [ ] Documentation is updated
   - [ ] No console errors/warnings
   - [ ] Changes are atomic and focused

2. **PR Description Should Include:**
   - Clear title (follows commit format)
   - Description of changes
   - Related issues (use #issue-number)
   - Screenshots (if UI changes)
   - Testing performed

3. **Review Process:**
   - At least 1 team member review required
   - Address review comments
   - Re-request review after changes
   - Merge once approved

4. **After Merge:**
   - Delete your feature branch
   - Close related issues
   - Watch for deployment

---

### Areas for Contribution

#### 🐛 Bug Fixes
- Check [GitHub Issues](https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612/issues) for bugs labeled `bug`
- Test thoroughly to ensure fix works
- Add regression tests

#### ✨ Features
- Check roadmap in [PROJECT_EVALUATION.md](PROJECT_EVALUATION.md)
- Discuss major features in issues first
- Implement with tests and documentation

#### 📚 Documentation
- Improve README files
- Update API documentation
- Add code examples
- Create user guides
- Fix typos and clarity issues

#### 🎨 UI/UX Improvements
- Improve accessibility
- Enhance responsive design
- Optimize performance
- Improve user workflows

#### 🧪 Testing
- Add unit tests
- Add integration tests
- Improve test coverage
- Test edge cases

---

### Community Guidelines

#### Be Respectful
- Treat all contributors with respect
- Welcome diverse perspectives
- Provide constructive feedback
- No harassment or discrimination

#### Be Helpful
- Help other contributors
- Answer questions in issues
- Review PRs helpfully
- Share knowledge

#### Be Honest
- Admit mistakes
- Ask for help when needed
- Give credit to others
- Report issues fairly

---

### Recognition

#### Contributors Hall of Fame
We recognize all contributors! Your name will be:
- Listed in [CONTRIBUTORS.md](CONTRIBUTORS.md)
- Added to GitHub contributors page
- Mentioned in release notes
- Featured on project website

---

### Resources for Contributors

#### Documentation
- [README.md](README.md) - Project overview
- [GETTING_STARTED.md](GETTING_STARTED.md) - Setup guide
- [DASHBOARD_GUIDE.md](DASHBOARD_GUIDE.md) - Feature documentation
- [CODEBOOK.ipynb](CODEBOOK.ipynb) - Code examples

#### API & Architecture
- API Docs: http://localhost:8000/docs
- [Framework_Analysis.ipynb](Framework_Analysis.ipynb) - Framework details
- [CODEBASE_STRUCTURE.md](CODEBASE_STRUCTURE.md) - Code organization

#### Tools & Setup
- **IDE:** VS Code with extensions
  - ESLint
  - Prettier
  - Python
  - Pylance
  - Thunder Client (API testing)

---

### Getting Help

#### Questions?
- 📖 Read documentation first
- 🐛 Search existing issues
- 💬 Open a discussion
- 📧 Contact core team

#### Need to Report Something?
- **Bug:** Open issue with `bug` label
- **Security Issue:** Email privately
- **Improvement Idea:** Open issue with `enhancement` label

---

## 📋 Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inspiring community for all. We pledge that anyone contributing will find a harassment-free environment.

### Our Standards
- Use welcoming and inclusive language
- Be respectful of differing opinions
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards others

### Enforcement
Violations of this code of conduct will result in appropriate action by project maintainers.

---

## 🎓 Learning Resources

### For Developers
- [MDN Web Docs](https://developer.mozilla.org/) - Web standards
- [FastAPI Documentation](https://fastapi.tiangolo.com/) - Backend framework
- [React Docs](https://react.dev/) - Frontend library
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Type system

### For Data Science
- [Pandas Docs](https://pandas.pydata.org/) - Data manipulation
- [NumPy Docs](https://numpy.org/) - Numerical computing
- [Scikit-learn Docs](https://scikit-learn.org/) - Machine learning

### For Governance
- [Aadhaar Official](https://www.uidai.gov.in/) - Aadhaar documentation
- [Digital Governance](https://www.meity.gov.in/) - India's tech ministry

---

## 📈 Contribution Stats

**Total Contributors:** 4 core team members + community  
**Lines of Code:** 25,000+  
**Commits:** 100+  
**Issues Resolved:** 50+  
**Features Implemented:** 40+  

---

## 🙏 Thank You!

Thank you for considering contributing to SAMVIDHAN UIDAI. Your contributions make this project better for everyone!

---

**Happy Contributing! 🚀**

Last Updated: January 25, 2026  
Version: 1.0.0

We are committed to providing a welcoming and inclusive environment:

- Be respectful and professional
- Listen to different viewpoints
- Report inappropriate behavior
- Focus on collaboration

---

## 🙏 Acknowledgments

Special thanks to:
- All contributors who have helped improve the project
- The open-source community for amazing tools and libraries
- Government stakeholders for feedback and requirements

---

## 📞 Connect With Us

- **GitHub:** [SAMVIDHAN-UIDAI](https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612)
- **Issues:** [Report bugs and request features](https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612/issues)
- **Discussions:** [Join conversations](https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612/discussions)

---

## 📄 License

By contributing to SAMVIDHAN UIDAI, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for being part of SAMVIDHAN UIDAI!** ❤️

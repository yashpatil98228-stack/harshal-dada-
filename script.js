const app = {
    currentBook: null,
    currentChapter: null,
    currentChapterIndex: null,
    lang: 'hi',

    init() {
        console.log("Shashwat Satya | Ready");
        this.cacheDOM();
        this.bindEvents();
        this.updateUI();
        lucide.createIcons();
        this.initAnimations();
    },

    cacheDOM() {
        this.libraryView = document.getElementById('library-view');
        this.readerView = document.getElementById('reader-view');
        this.bookTitle = document.getElementById('current-book-title');
        this.tocList = document.getElementById('toc-list');
        this.versesList = document.getElementById('verses-list');
        this.chapterTitle = document.getElementById('chapter-title');
        
        // UI Elements for translation
        this.uiHeroTitle = document.getElementById('ui-hero-title');
        this.uiHeroDesc = document.getElementById('ui-hero-desc');
        this.uiLangBtn = document.getElementById('lang-toggle-btn');
        this.uiSubtitle = document.getElementById('ui-subtitle');
        this.uiFooterSubtitle = document.getElementById('ui-footer-subtitle');
        this.uiCopyright = document.getElementById('ui-copyright');
        this.uiFooterNav = document.getElementById('ui-footer-nav');
    },

    bindEvents() {
        // Global listeners if needed
    },

    toggleLanguage() {
        this.lang = this.lang === 'hi' ? 'en' : 'hi';
        this.updateUI();
        if (this.currentBook) {
            this.bookTitle.innerText = this.currentBook[this.lang].title;
            this.renderTOC();
            if (this.currentChapterIndex !== null) {
                this.openChapter(this.currentChapterIndex);
            }
        }
    },

    updateUI() {
        const strings = UI_STRINGS[this.lang];
        
        // Update header/hero
        if (this.uiSubtitle) this.uiSubtitle.innerText = strings.subtitle;
        if (this.uiHeroTitle) this.uiHeroTitle.innerText = strings.hero_title;
        if (this.uiHeroDesc) this.uiHeroDesc.innerText = strings.hero_desc;
        if (this.uiLangBtn) {
            this.uiLangBtn.querySelector('span').innerText = this.lang === 'hi' ? 'Switch to English' : 'हिन्दी में बदलें';
        }

        // Update Book Cards
        const books = ['gita', 'bhagavata', 'garga', 'mahabharata', 'garuda'];
        books.forEach(id => {
            const card = document.getElementById(`book-card-${id}`);
            if (card) {
                const data = BOOK_DATA[id][this.lang];
                card.querySelector('h3').innerText = data.title;
                card.querySelector('p').innerText = data.desc;
                card.querySelector('.book-badge').innerText = data.badge;
                card.querySelector('.read-btn').innerHTML = `${strings.read_btn} <i data-lucide="${this.getIcon(id)}"></i>`;
            }
        });

        // Update Footer
        if (this.uiFooterSubtitle) this.uiFooterSubtitle.innerText = strings.subtitle;
        if (this.uiCopyright) this.uiCopyright.innerText = strings.copyright;
        
        if (this.uiFooterNav) {
            const footerNavLinks = this.uiFooterNav.querySelectorAll('a');
            if (footerNavLinks.length >= 4) {
                footerNavLinks[0].innerText = strings.home;
                footerNavLinks[1].innerText = strings.wisdom;
                footerNavLinks[2].innerText = strings.about;
                footerNavLinks[3].innerText = strings.scriptures;
            }
        }

        // Update Reader Static Text if open
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            backBtn.innerHTML = `<i data-lucide="arrow-left"></i> ${strings.home}`;
        }
        const tocHeading = document.querySelector('.toc-sidebar h3');
        if (tocHeading) {
            tocHeading.innerText = this.lang === 'hi' ? 'अध्याय' : 'Chapters';
        }

        lucide.createIcons();
    },

    getIcon(id) {
        const icons = { gita: 'book-open', bhagavata: 'sparkles', garga: 'heart', mahabharata: 'swords', garuda: 'sun' };
        return icons[id] || 'book';
    },

    initAnimations() {
        gsap.from(".book-card", {
            duration: 1.2,
            y: 100,
            opacity: 0,
            stagger: 0.15,
            ease: "expo.out",
            delay: 0.5
        });
    },

    openBook(bookId) {
        this.currentBook = BOOK_DATA[bookId];
        if (!this.currentBook) return;

        const tl = gsap.timeline();
        
        tl.to(this.libraryView, {
            duration: 0.5,
            opacity: 0,
            y: -50,
            onComplete: () => {
                this.libraryView.classList.add('hidden');
                this.readerView.classList.remove('hidden');
                window.scrollTo(0, 0);
            }
        });

        tl.fromTo(this.readerView, 
            { opacity: 0, y: 50 },
            { 
                duration: 0.8, 
                opacity: 1, 
                y: 0, 
                ease: "power3.out",
                onComplete: () => {
                    this.bookTitle.innerText = this.currentBook[this.lang].title;
                    this.renderTOC();
                    this.openChapter(0);
                    lucide.createIcons();
                }
            }
        );
    },

    closeBook() {
        const tl = gsap.timeline();

        tl.to(this.readerView, {
            duration: 0.5,
            opacity: 0,
            y: 50,
            onComplete: () => {
                this.readerView.classList.add('hidden');
                this.libraryView.classList.remove('hidden');
                window.scrollTo(0, 0);
                this.currentBook = null;
                this.currentChapterIndex = null;
            }
        });

        tl.fromTo(this.libraryView, 
            { opacity: 0, y: -50 },
            { duration: 0.8, opacity: 1, y: 0, ease: "power3.out" }
        );
    },

    renderTOC(chapters = this.currentBook.chapters) {
        this.tocList.innerHTML = '';
        chapters.forEach((chapter, index) => {
            const li = document.createElement('li');
            li.className = 'toc-item';
            li.innerText = `${index + 1}. ${chapter.title}`;
            li.onclick = () => this.openChapter(index);
            this.tocList.appendChild(li);
        });
    },

    openChapter(index) {
        const chapter = this.currentBook.chapters[index];
        this.currentChapter = chapter;
        this.currentChapterIndex = index;

        const items = this.tocList.querySelectorAll('.toc-item');
        items.forEach((item, i) => {
            if (i === index) item.classList.add('active');
            else item.classList.remove('active');
        });

        gsap.to(this.versesList, {
            duration: 0.3,
            opacity: 0,
            onComplete: () => {
                this.renderContent(chapter);
                gsap.to(this.versesList, { duration: 0.5, opacity: 1 });
            }
        });

        this.chapterTitle.innerText = chapter.title;
    },

    renderContent(chapter) {
        this.versesList.innerHTML = '';
        const strings = UI_STRINGS[this.lang];

        chapter.content.forEach((item, idx) => {
            if (item.sanskrit) {
                const verseEl = document.createElement('div');
                verseEl.className = 'shloka-container';
                verseEl.innerHTML = `
                    <span class="shloka-number">${strings.chapter} ${chapter.id} | ${strings.verse} ${item.number}</span>
                    <p class="shloka-text">${item.sanskrit.replace(/\n/g, '<br>')}</p>
                    <p class="shloka-translation">"${item.translation}"</p>
                `;
                this.versesList.appendChild(verseEl);
            } else if (item.text) {
                const p = document.createElement('p');
                p.style.marginBottom = "30px";
                p.style.fontSize = "1.25rem";
                p.style.lineHeight = "2";
                p.style.color = "var(--text-main)";
                p.style.fontWeight = "300";
                p.innerText = item.text;
                this.versesList.appendChild(p);
            } else if (item.image) {
                const img = document.createElement('img');
                img.src = item.image;
                img.style.width = '100%';
                img.style.borderRadius = '20px';
                img.style.marginBottom = '30px';
                img.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
                img.style.border = '1px solid rgba(255,255,255,0.1)';
                img.className = 'animate-fade';
                this.versesList.appendChild(img);
            }
        });

        lucide.createIcons();
    }
};

window.onload = () => app.init();

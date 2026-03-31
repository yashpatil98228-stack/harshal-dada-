const UI_STRINGS = {
    hi: {
        title: "शाश्वत सत्य",
        subtitle: "प्राचीन भारतीय ज्ञान का संगम",
        read_btn: "पढ़ना शुरू करें",
        back_btn: "वापस जाएँ",
        chapters: "अध्याय",
        language: "English",
        search_placeholder: "खोजें...",
        no_results: "कोई परिणाम नहीं मिला",
        footer_text: "© 2024 शाश्वत सत्य - दिव्य ज्ञान की यात्रा",
        chapter: "अध्याय",
        verse: "श्लोक"
    },
    en: {
        title: "Shashvat Satya",
        subtitle: "The Confluence of Ancient Wisdom",
        read_btn: "Start Reading",
        back_btn: "Go Back",
        chapters: "Chapters",
        language: "हिंदी",
        search_placeholder: "Search...",
        no_results: "No results found",
        footer_text: "© 2024 Shashvat Satya - Journey of Divine Wisdom",
        chapter: "Chapter",
        verse: "Verse"
    }
};

const BOOK_DATA = {
    gita: {
        hi: { title: "भगवद्गीता", badge: "700 श्लोक | 18 अध्याय", desc: "कुरुक्षेत्र के युद्धक्षेत्र में भगवान कृष्ण और अर्जुन के बीच ईश्वरीय संवाद।" },
        en: { title: "Bhagavad Gita", badge: "700 Shlokas | 18 Chapters", desc: "The divine conversation between Lord Krishna and Arjuna on the battlefield of Kurukshetra." },
        image: "media/gita.png",
        chapters: [
            { id: 1, title: "Arjuna Vishada Yoga", content: [{ number: "1.1", sanskrit: "धृतराष्ट्र उवाच |\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||", translation: "धृतराष्ट्र ने कहा- हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे और पाण्डु के पुत्रों ने क्या किया?" }] },
            { id: 5, title: "Karma Sanyasa Yoga (Marathi)", content: [
                { number: "5.1", sanskrit: "अर्जुन उवाच |\nसंन्यासं कर्मणां कृष्ण पुनर्योगं च शंससि |", translation: "अर्जुन म्हणाला: हे कृष्णा, तू एकदा कर्मांच्या संन्यासाची आणि पुन्हा योगाची स्तुती करतोस." },
                { number: "5.2", sanskrit: "श्रीभगवानुवाच |\nसंन्यासं कर्मयोगश्च निःश्रेयसकरावुभौ |", translation: "श्रीभगवान म्हणाले: संन्यास आणि कर्मयोग दोन्ही मोक्ष देणारे आहेत, पण कर्मयोग श्रेष्ठ आहे." },
                { number: "5.3", sanskrit: "ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति |", translation: "खरा संन्यासी तोच आहे जो कोणाचा द्वेष करत नाही आणि कशाची इच्छा करत नाही." },
                { number: "5.4", sanskrit: "साङ्ख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः |", translation: "मूर्ख लोक सांख्य आणि योग वेगळे मानतात, ज्ञानी नाही." },
                { number: "5.5", sanskrit: "यत्साङ्ख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते |", translation: "जे स्थान सांख्ययोगाने मिळते, तेच कर्मयोगानेही मिळते." },
                { number: "5.6", sanskrit: "संन्यासस्तु महाबाहो दुःखमाप्तुमयोगतः |", translation: "कर्मयोगाशिवाय संन्यास कठीण आहे." },
                { number: "5.7", sanskrit: "योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः |", translation: "जो मन आणि इंद्रियांवर नियंत्रण ठेवून काम करतो, तो शुद्ध आणि अशांततेला जिंकणारा असतो." }
            ]}
        ]
    },
    garuda: {
        hi: { title: "गरुड़ पुराण", badge: "मृत्यु के पश्चात", desc: "यममार्ग, नरक यातनाओं और जीवात्मा की परलोक यात्रा का विस्तृत शास्त्र।" },
        en: { title: "Garuda Purana", badge: "Afterlife Journey", desc: "Soul's journey after death, heavens, hells, and liberation." },
        image: "media/garuda.png",
        chapters: [
            { id: 1, title: "1. यमलोक का मार्ग", content: [{ text: "यमदूतों द्वारा पापी जीव को ले जाने की कथा।" }] },
            { id: 2, title: "2. यमदूत और पापी जीव", content: [{ text: "पापियों की यातना और मार्ग की कठिनाइयाँ।" }] },
            { id: 3, title: "3. वैतरणी नदी", content: [{ text: "खौलते रक्त की नदी जिसे केवल पुण्यवान ही पार कर सकते हैं।" }] },
            { id: 4, title: "4. पिंडदान और श्राद्ध", content: [{ text: "पूर्वजों की मुक्ति और पिंडदान का महत्व। " }] },
            { id: 5, title: "5. गर्भ जीवन", content: [{ text: "पुनर्जन्म और गर्भ के कष्टों का विवरण।" }] },
            { id: 6, title: "6. मोक्ष मार्ग", content: [{ text: "जन्म-मृत्यु के चक्र से मुक्ति का उपाय।" }] },
            { id: 7, title: "7. मृत्यु लक्षण", content: [{ text: "मृत्यु से पहले मिलने वाले आध्यात्मिक संकेत।" }] },
            { id: 8, title: "8. यमपुरी सभा", content: [{ text: "यमराज के सामने कर्मों का न्याय।" }] },
            { id: 9, title: "9. प्रेत योनि", content: [{ text: "भटकती आत्माओं और उनकी शांति के कर्म।" }] },
            { 
               id: 10, 
               title: "10. जीवन-मृत्यु संरक्षण (Katha)", 
               content: [{ text: "यह संपूर्ण जीवन का निचोड़ है। मनुष्य को अपने कर्मों का फल भोगना ही पड़ता है।" }] 
            },
            {
               id: 11,
               title: "11. बभ्रुवाहन कथा",
               content: [{ text: "राजा बभ्रुवाहन द्वारा प्रेत का उद्धार। भगवान विष्णु कहते हैं— 'श्राद्ध से प्रेत मुक्त हो सकता है।'" }]
            }
        ]
    },
    garga: {
        hi: { title: "गर्ग संहिता", badge: "प्रेम और भक्ति", desc: "राधा-कृष्ण के अलौकिक प्रेम, विरह और मिलन की दिव्य गाथा।" },
        en: { title: "Garga Samhita", badge: "Love & Devotion", desc: "The divine chronicle of Radha-Krishna's eternal love, separation, and reunion." },
        image: "media/garga.png",
        chapters: [
            { 
                id: 1, 
                title: "1. गोलोक में श्राप (शुरुआत)", 
                content: [
                    { text: "कहानी गोलोक धाम से शुरू होती है। एक दिन राधा और कृष्ण के सखा श्रीदामा के बीच अनबन हो गई। राधा ने श्रीदामा को शाप दिया, और श्रीदामा ने भी राधा को कृष्ण से 100 वर्ष के विरह का शाप दिया।" },
                    { text: "<b>The Curse in Goloka:</b> The story begins in Goloka Dhama. A misunderstanding occurs between Radha and Sridama, leading to a 100-year separation curse." }
                ] 
            },
            { 
                id: 3, 
                title: "3. भांडिरवन में गुप्त विवाह", 
                content: [
                    { text: "गर्ग संहिता के अनुसार, भगवान ब्रह्मा ने स्वयं भांडिरवन के जंगल में राधा और कृष्ण का गुप्त विवाह संपन्न कराया था। यह संसार से छिपा हुआ एक 'आत्मीय मिलन' था।" },
                    { text: "<b>The Secret Wedding in Bhandirvan:</b> Garga Samhita states that Lord Brahma himself performed the secret wedding ceremony of Radha and Krishna." }
                ] 
            },
            { 
                id: 4, 
                title: "4. रासलीला और विरह की पीड़ा", 
                content: [
                    { text: "कृष्ण अक्रूर जी के साथ मथुरा चले गए। जैसे ही रथ वृंदावन की सीमा पार कर गया, 100 वर्षों का विरह शुरू हो गया।" },
                    { text: "<b>The Rasa Lila and Separation:</b> As the chariot left Vrindavan, the 100-year separation officially began." }
                ] 
            },
            { id: 5, title: "5. द्वारका लीला", content: [{ text: "द्वारका के राजा के रूप में कृष्ण की कहानियाँ।" }] },
            { id: 6, title: "6. कुरुक्षेत्र में पुनर्मिलन", content: [{ text: "100 वर्ष बाद राधा और कृष्ण का फिर से मिलना।" }] },
            { id: 7, title: "7. गोलोक वापसी (महान अंत)", content: [{ text: "कृष्ण और राधा का अपने अनंत धाम वापस लौटना।" }] }
        ]
    },
    mahabharata: {
        hi: { title: "महाभारत", badge: "महान महाकाव्य", desc: "धर्म का महाकाव्य, कुरुक्षेत्र युद्ध और भारत वंश का इतिहास।" },
        en: { title: "Mahabharata", badge: "The Great Epic", desc: "The epic chronicle of Dharma, the great war, and the lineage of Bharat." },
        image: "media/mahabharata.png",
        chapters: [
            { id: 1, title: "The Beginning: King Shantanu", content: [{ text: "King Shantanu of the Kuru dynasty..." }] },
            { id: 4, title: "The Kurukshetra War", content: [{ text: "Detailed events of the 18 days of the Great War..." }] }
        ]
    },
    bhagavata: {
        hi: { title: "श्रीमद्भागवत पुराण", badge: "12 स्कंध", desc: "भगवान विष्णु के अवतारों की शाश्वत कथाएँ और कृष्ण का दिव्य जीवन।" },
        en: { title: "Bhagavata Purana", badge: "12 Skandhas", desc: "Eternal stories of Lord Vishnu's incarnations and the sublime life of Krishna." },
        image: "media/bhagavata.png",
        chapters: [
            { id: 1, title: "The Seven Questions of Sages", content: [{ text: "Suta Goswami begins the narration..." }] }
        ]
    }
};

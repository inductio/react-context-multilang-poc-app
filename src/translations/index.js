export const translations = {
    english: {
        field: 'Name',
        button: 'Submit'
    },
    ukrainian: {
        field: 'Ім\'я',
        button: 'Відправити'
    }
};

export const getLangText = (lang, element) => {
    return translations[lang][element];
};
window.$skills = {
    languages: [
        {
            name: 'JavaScript',
            image: 'JavaScriptLogo.png',
            description: 'A popular scripting language for web development.',
            hours: 20,
        },
        {
            name: 'Python',
            image: 'PythonLogo.png',
            description: 'A versatile programming language used in web development, data analysis, and more.',
            hours: 30,
        },
        {
            name: 'Java',
            image: 'JavaLogo1.png',
            description: 'A versatile programming language used in web development, data analysis, and more.',
            hours: 160,
        },
    ],
    load() {},
    progress(language) {
        const totalHours = 1000;
        const percentage = (language.hours / totalHours) * 100;
        return `${percentage}%`;
    },
};

import { useLanguage } from '../hooks/useLanguage';

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium text-gray-400 hover:text-white"
            aria-label="Toggle language"
        >
            {language === 'en' ? 'VI' : 'EN'}
        </button>
    );
};


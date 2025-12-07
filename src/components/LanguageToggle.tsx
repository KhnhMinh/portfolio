import { useLanguage } from '../hooks/useLanguage';

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium text-gray-400 hover:text-white"
            aria-label="Toggle language"
        >
            {language === 'en' ? (
                <>
                    <img src="/src/assets/icons/flag-vn.svg" alt="Vietnamese flag" className="w-5 h-5" aria-hidden="true" />
                    VI
                </>
            ) : (
                <>
                    <img src="/src/assets/icons/flag-uk.svg" alt="UK flag" className="w-5 h-5" aria-hidden="true" />
                    EN
                </>
            )}
        </button>
    );
};


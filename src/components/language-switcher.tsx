"use client";

import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm"
            aria-label="Switch Language"
        >
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">
                {language === 'en' ? 'EN' : 'PT'}
            </span>
        </button>
    );
}

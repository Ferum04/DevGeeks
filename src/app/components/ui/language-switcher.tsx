import { useTranslation } from "react-i18next";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select"
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <Select value={i18n.language} onValueChange={(val) => i18n.changeLanguage(val)}>
            <SelectTrigger className="w-[100px] h-9" aria-label="Select language">
                <div className="flex items-center gap-2">
                    <Globe size={16} />
                    <SelectValue placeholder="Lang" />
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="uk">Українська</SelectItem>
            </SelectContent>
        </Select>
    );
}

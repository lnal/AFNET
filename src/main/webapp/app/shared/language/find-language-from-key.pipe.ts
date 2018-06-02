import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'findLanguageFromKey'})
export class FindLanguageFromKeyPipe implements PipeTransform {
    private languages: any = {
        'cs': { name: 'Český' },
        'en': { name: 'English' },
        'fr': { name: 'Français' },
        'it': { name: 'Italiano' },
        'pl': { name: 'Polski' },
        'ru': { name: 'Русский' },
        'sk': { name: 'Slovenský' },
        'es': { name: 'Español' }
        // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    };
    transform(lang: string): string {
        return this.languages[lang].name;
    }
}

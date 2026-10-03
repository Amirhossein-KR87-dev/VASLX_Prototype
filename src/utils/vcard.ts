import { BUSINESS_DATA } from '../types';

export function generateVCard(
  name: string = BUSINESS_DATA.ownerName,
  phone: string = BUSINESS_DATA.phone,
  org: string = BUSINESS_DATA.businessName
): string {
  // vCard 3.0 standard with UTF-8
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN;CHARSET=UTF-8:${name} (${org})`,
    `N;CHARSET=UTF-8:${name};;;;`,
    `ORG;CHARSET=UTF-8:${org}`,
    'TITLE;CHARSET=UTF-8:مدیریت',
    `TEL;TYPE=CELL,VOICE,PREF:${phone}`,
    `TEL;TYPE=WORK,VOICE:${phone}`,
    `ADR;TYPE=WORK;CHARSET=UTF-8:;;${BUSINESS_DATA.address};مشهد;;;ایران`,
    `NOTE;CHARSET=UTF-8:${BUSINESS_DATA.category} - ساعت کاری: ${BUSINESS_DATA.workingHours}`,
    `URL:https://instagram.com/${BUSINESS_DATA.instagram}`,
    'END:VCARD'
  ].join('\r\n');
}

export function downloadVCardFile(): boolean {
  try {
    const vCardString = generateVCard();
    const blob = new Blob([vCardString], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `AmirHossein-NarenjCafe.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  } catch (error) {
    console.error('Error generating vCard:', error);
    return false;
  }
}

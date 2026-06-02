export default function generateRandomEGN(): string {
    const date: Date = new Date(
        1950 + Math.floor(Math.random() * 80),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
    );

    let year: number = date.getFullYear();
    let month: number = date.getMonth() + 1;
    const day: number = date.getDate();

    if (year < 1900) {
        month += 20;
    } else if (year >= 2000) {
        month += 40;
    }

    const yy: string = String(year).slice(-2);
    const mm: string = String(month).padStart(2, '0');
    const dd: string = String(day).padStart(2, '0');

    const region: number = Math.floor(Math.random() * 100); 
    const regionStr: string = String(region).padStart(2, '0');

    const isMale: boolean = (Math.random() < 0.5);
    const genderDigits: number[] = isMale ? [0, 2, 4, 6, 8] : [1, 3, 5, 7, 9];
    const genderStr: string = String(genderDigits[Math.floor(Math.random() * genderDigits.length)]);

    const egnWithoutControl: string = `${yy}${mm}${dd}${regionStr}${genderStr}`;

    const weights: number[] = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum: number = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(egnWithoutControl[i], 10) * weights[i];
    }

    const remainder: number = sum % 11;
    const controlDigit: number = remainder < 10 ? remainder : 0;

    return egnWithoutControl + controlDigit;
}

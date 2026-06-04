
export const egnValidationChecker = async (egn: string) => {
    const cleaned = egn.trim();
    if (!/^[0-9]{10}$/.test(cleaned)) return 'Егн-то трябва да има 10 цифри!';

    const yy = parseInt(cleaned.substr(0, 2), 10);
    let mm = parseInt(cleaned.substr(2, 2), 10);
    const dd = parseInt(cleaned.substr(4, 2), 10);
    let year = 1900 + yy;

    if (mm >= 1 && mm <= 12) {
    } else if (mm >= 41 && mm <= 52) {
        mm -= 40;
        year = 2000 + yy;
    } else {
        return 'Егн-то съдържа грешнен месец';
    }

    // check valid date
    const date = new Date(year, mm - 1, dd);
    if (
        date.getFullYear() !== year ||
        date.getMonth() !== mm - 1 ||
        date.getDate() !== dd
    ) {
        return 'Егн-то съдържа грешна данни на раждане';
    }

    // checksum
    const weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    const digits = cleaned.split('').map((d) => parseInt(d, 10));
    const sum = weights.reduce((acc, w, i) => acc + w * digits[i], 0);
    const mod = sum % 11;
    const check = mod === 10 ? 0 : mod;
    if (check !== digits[9]) return 'Егн-то не е валидно!';

}

export const usernameChecker = async (username: string) => {
    
    

}



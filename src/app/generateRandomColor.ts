export function generateRandomColor(): string {
    const randomNum = Math.floor(Math.random() * 16777215);
    const hexColor = randomNum.toString(16).padStart(6, '0');
    return `#${hexColor}`;
}
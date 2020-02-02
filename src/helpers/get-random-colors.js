export default function getRandomColor() {
    return `#${(((1 << 24) * Math.random()) | 0 | 1).toString(16)}`;
};

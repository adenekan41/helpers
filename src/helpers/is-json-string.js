export default function IsJsonString(str) {
    try {
        const json = JSON.parse(str);
        return typeof json === 'object';
    } catch (e) {
        return false;
    }
};

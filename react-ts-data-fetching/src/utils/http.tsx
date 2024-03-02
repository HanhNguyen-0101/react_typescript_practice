export async function get<T>(url: string) {
    const respone = await fetch(url);
    if (!respone.ok) {
        throw new Error('No data');
    }
    const data = await respone.json() as unknown;
    return data as T;
}
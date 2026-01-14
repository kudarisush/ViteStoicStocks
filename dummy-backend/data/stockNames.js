import fs from "node:fs/promises";

export async function getStoredStockNames() {
    const rawFileContent = await fs.readFile('stockNames.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    return data.stockNames ?? [];
}
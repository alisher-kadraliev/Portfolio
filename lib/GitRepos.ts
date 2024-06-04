import fetch from 'node-fetch';

interface Repository {
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    updated_at: string;
}
export async function getRepos(): Promise<Repository[] | null> {
    try {
        const response = await fetch('https://api.github.com/users/alisher-kadraliev/repos');
        const data = await response.json();
        return data as Repository[];
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return null;
    }

}


export const basicFetch = async <returnType>(endpoint: string, parameters: {}): Promise<returnType>  => {
    const response = await fetch(endpoint, parameters);

    if(!response.ok) throw new Error("Error!");

    const data = await response.json();

    return data;
}


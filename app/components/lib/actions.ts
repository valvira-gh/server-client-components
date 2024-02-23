
export const search = async (formData: FormData) => {
    'use server';
    const query = await formData.get('query');
    console.log(`Searching for ${query}`);
};

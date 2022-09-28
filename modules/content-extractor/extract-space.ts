import { Output } from '../configuration/types';
import { api } from '../confluence-api';

export const extractSpace = async (spaceKey: string, output: Output) => {
    console.info(`🪐 extract-space: ${spaceKey}`);
    const homepage = await api.getSpaceHomepage(spaceKey);

    console.info(`🏠 process space home`, homepage);
};

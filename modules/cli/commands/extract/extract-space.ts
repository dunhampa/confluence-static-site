import { extractPageTree } from './extract-page-tree';
import { extractBlogs } from './extract-blogs';
import { Output } from '../../../configuration/types';
import { api } from '../../../confluence-api';

export const extractSpace = async (spaceKey: string, output: Output) => {
    console.info(`🪐 extract-space: ${spaceKey}`);
    const homepage = await api.getSpaceHomepage(spaceKey);

    console.info(`🏠 process space home`, homepage);
    await extractPageTree(homepage, output, true);
    await extractBlogs(spaceKey, output);
};

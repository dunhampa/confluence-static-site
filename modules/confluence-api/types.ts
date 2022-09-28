export type Identifier = {
    id: string;
    title: string;
};

export type Attachment = {
    fileId: string;
    downloadUrl: string;
    mediaType: string;
    isCover: boolean;
};

export type AttachmentData = {
    stream: any;
};

export type Content = {
    identifier: Identifier;
    type: 'page' | 'blogpost';
    body: any;

    author: Identifier & { avatar: string; accountId: string };
    lastModifiedDate: number;

    children?: Identifier[];
    attachments?: Attachment[];
    cover?: Attachment;
};

export type ResourceObject = {
    resourceUrl: string;
};

export type ResourceDefinition = {
    url: string;
    generator: { icon: { url: string } };
    name: string;
    '@type': string;
};

import React, { useEffect, useState } from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Spinner from '@atlaskit/spinner';
import { Content } from '../confluence-api/types';
import axios from 'axios';
import { ContentRenderer } from './content/content-renderer';

import './main-content.css';
import { ContentAncestors } from './content/content-ancestors';
import { ContentHeader } from './content/content-header';
import { ContentByLine } from './content/content-byline';
import { ContentCover } from './content/content-cover';

export const MainContent = () => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState<Content | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const { data } = await axios.get('data.json');
            return data;
        };
        fetchData().then((data) => {
            document.title = `${data.identifier.title}`;
            setContent(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading && (
                <div style={{ margin: 60 }}>
                    <Spinner size="large" />
                </div>
            )}
            {!loading && content && (
                <div className="main-content">
                    <ContentAncestors content={content} />
                    <Page>
                        <Grid layout="fixed">
                            <ContentCover content={content} />
                            <GridColumn medium={12}>
                                <ContentHeader content={content} />
                            </GridColumn>
                            <GridColumn medium={12}>
                                <ContentByLine content={content} />
                                <ContentRenderer content={content} />
                            </GridColumn>
                        </Grid>
                    </Page>
                </div>
            )}
        </>
    );
};
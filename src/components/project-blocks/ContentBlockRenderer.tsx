'use client';

import React from 'react';
import { ContentBlock } from '@/data/projects';
import { CompareSlider } from './CompareSlider';
import { ContentFeature } from './ContentFeature';

interface ContentBlockRendererProps {
  block: ContentBlock;
}

export const ContentBlockRenderer: React.FC<ContentBlockRendererProps> = ({ block }) => {
  switch (block.type) {
    case 'split_comparison':
      return <CompareSlider block={block} />;
    case 'feature':
      return <ContentFeature block={block} />;
    default:
      console.warn('Unknown block type:', block);
      return null;
  }
};

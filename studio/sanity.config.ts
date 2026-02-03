import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const projectId = 'upq76f9e';
const dataset = 'production';

export default defineConfig({
  name: 'skf-studio',
  title: 'SKF - Svenska Kickboxningsförbundet',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});

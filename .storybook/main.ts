import type { StorybookConfig } from '@storybook/react-vite';
import { dirname } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', {
    directory: '../template-stories/lib/preview-api',
    titlePrefix: 'lib/preview-api',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }, {
    directory: '../template-stories/addons/links',
    titlePrefix: 'addons/links',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }, {
    directory: '../template-stories/addons/actions',
    titlePrefix: 'addons/actions',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }, {
    directory: '../template-stories/addons/backgrounds',
    titlePrefix: 'addons/backgrounds',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }, {
    directory: '../template-stories/addons/controls',
    titlePrefix: 'addons/controls',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }, {
    directory: '../template-stories/addons/docs',
    titlePrefix: 'addons/docs',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }, {
    directory: '../template-stories/addons/toolbars',
    titlePrefix: 'addons/toolbars',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }, {
    directory: '../template-stories/addons/viewport',
    titlePrefix: 'addons/viewport',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }, {
    directory: '../template-stories/addons/interactions',
    titlePrefix: 'addons/interactions',
    files: '**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  }],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {
    autodocs: 'tag',
  },

  previewAnnotations: ['./src/stories/components', './template-stories/lib/preview-api/preview.ts', './template-stories/addons/toolbars/preview.ts'],
  features: {},

  core: {
    disableWhatsNewNotifications: true
  },

  viteFinal: (config) => ({
    ...config,
    optimizeDeps: { ...config.optimizeDeps, force: true },
    server: {
      ...config.server,
      fs: {
        ...config.server?.fs,
        allow: ['stories', 'src', 'template-stories', 'node_modules', ...(config.server?.fs?.allow || [])],
      },
    },
  })
};
export default config;

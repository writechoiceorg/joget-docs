/* eslint-disable no-undef */
/**
 * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation

  The sidebars can be generated from the filesystem, or explicitly defined here.

  Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'joget-docs',
      label: 'Joget Docs',
    },
    {
      type: 'html',
      value: '<span class=\'sidebar-title\'>Getting started</span>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Install Guides',
      items: [
        'getting-started/install-guides/installing-guide',
      ],
    },
    {
      type: 'category',
      label: 'Platform Overview',
      items: [
        'getting-started/platform-overview/app-center',
        'getting-started/platform-overview/uis-forms-lists-process',
        'getting-started/platform-overview/administrator-bar',
        'getting-started/platform-overview/app-generator',
      ],
    },
  ],
};

module.exports = sidebars;
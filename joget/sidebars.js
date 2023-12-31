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
      type: 'html',
      value: '<span class=\'sidebar-title\'>Getting started</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    {
      type: 'doc',
      id: 'joget-docs',
      label: 'Introduction',
      className: 'sidebar_first_options joget_docs',
    },
    // {
    //   type: 'doc',
    //   label: 'Install Guides',
    //   id:'getting-started/installing-guide',
    //   className: 'sidebar_first_options install_guides',
    //   // items: [
    //   //   'getting-started/install-guides/installing-guide',
    //   // ],
    // },
    {
      type: 'category',
      label: 'Install Guides',
      className: 'sidebar_first_options install_guides',
      link: {
        type: 'doc',
        id: 'getting-started/installing-guides/installing-guides',
      },
      items: [
        'getting-started/installing-guides/joget-dx-on-demand',
        'getting-started/installing-guides/joget-google-apps',
        'getting-started/installing-guides/download-guide',
      ],
    },
    {
      type: 'category',
      label: 'Platform Overview',
      className: 'sidebar_first_options platform_overview',
      link: {
        type: 'doc',
        id: 'getting-started/platform-overview/platform-overview',
      },
      items: [
        'getting-started/platform-overview/app-center',
        'getting-started/platform-overview/uis-forms-lists-process',
        'getting-started/platform-overview/administrator-bar',
        'getting-started/platform-overview/app-generator',
      ],
    },
    {
      type: 'category',
      label: 'Create an app',
      className: 'sidebar_first_options create_an_app',
      link: {
        type: 'doc',
        id: 'getting-started/create-an-app/create-an-app',
      },
      items: [
        'getting-started/create-an-app/design-new-app',
        'getting-started/create-an-app/design-a-form',
        'getting-started/create-an-app/design-a-list',
        'getting-started/create-an-app/design-a-ui',
        {
          type: 'category',
          label: 'Design a process',
          className: 'design_a_process',
          link: {
            type: 'doc',
            id: 'getting-started/create-an-app/design-a-process/design-a-process',
          },
          items: [
            'getting-started/create-an-app/design-a-process/process-builder',
            'getting-started/create-an-app/design-a-process/add-process-components',
            'getting-started/create-an-app/design-a-process/configure-components',
            'getting-started/create-an-app/design-a-process/integrate-process-into-ui',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
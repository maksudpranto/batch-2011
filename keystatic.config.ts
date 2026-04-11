import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    home: singleton({
      label: 'Home',
      path: 'content/home',
      schema: {
        pageBadge: fields.text({ label: 'Page Badge', defaultValue: "✨ the official batch directory" }),
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroTitleExtended: fields.text({ label: 'Hero Title Extended', defaultValue: "Legacy & Legends." }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle', multiline: true }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/images/home',
          publicPath: '/images/home/',
        }),
        stats: fields.array(
          fields.object({
            number: fields.text({ label: 'Number' }),
            label: fields.text({ label: 'Label' })
          }),
          { label: 'Statistics', itemLabel: props => props.fields.label.value }
        ),
        features: fields.array(
          fields.object({
            icon: fields.text({ label: 'Icon (emoji)' }),
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
            linkText: fields.text({ label: 'Link Text' }),
            linkHref: fields.text({ label: 'Link Href' })
          }),
          { label: 'Features', itemLabel: props => props.fields.title.value }
        ),
        historyTitle: fields.text({ label: 'History Section Title', defaultValue: "Our Legacy" }),
        historyContent: fields.text({ label: 'History Content', multiline: true, defaultValue: "Founded in the heart of our community, our school has built a tradition of excellence, shaping the minds of thousands of students who went on to become legends in their fields. Batch '11 remains one of the most distinguished chapters of this history." }),
        historyImage: fields.image({
          label: 'History Image',
          directory: 'public/images/home',
          publicPath: '/images/home/',
        }),
      },
    }),
    about: singleton({
      label: 'About Batch',
      path: 'content/about',
      schema: {
        pageBadge: fields.text({ label: 'Page Badge', defaultValue: "Our History" }),
        title: fields.text({ label: 'Title' }),
        pageSubtitle: fields.text({ label: 'Page Subtitle', multiline: true, defaultValue: "The journey that brought us together and keeps us connected." }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/about',
            publicPath: '/images/about/',
          },
        }),
      },
    }),
    contact: singleton({
      label: 'Contact',
      path: 'content/contact',
      schema: {
        pageBadge: fields.text({ label: 'Page Badge', defaultValue: "Get In Touch" }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        formTitle: fields.text({ label: 'Form Title', defaultValue: "Submit a Memory" }),
        formDescription: fields.text({ label: 'Form Description', multiline: true, defaultValue: "Send us an update, a photo, or an event idea to be featured." }),
        email: fields.text({ label: 'Email' }),
        phone: fields.text({ label: 'Phone' }),
        address: fields.text({ label: 'Address', multiline: true }),
        facebookUrl: fields.text({ label: 'Facebook URL' }),
      },
    }),
    membersPage: singleton({
      label: 'Members Page Settings',
      path: 'content/membersPage',
      schema: {
        pageBadge: fields.text({ label: 'Page Badge', defaultValue: "Find Alumni" }),
        title: fields.text({ label: 'Title', defaultValue: "Members Directory" }),
        pageSubtitle: fields.text({ label: 'Page Subtitle', multiline: true, defaultValue: "Search and connect with all verified batch mates." }),
      }
    }),
    galleryPage: singleton({
      label: 'Gallery Page Settings',
      path: 'content/galleryPage',
      schema: {
        pageBadge: fields.text({ label: 'Page Badge', defaultValue: "Moments in Time" }),
        title: fields.text({ label: 'Title', defaultValue: "Batch Gallery" }),
        pageSubtitle: fields.text({ label: 'Page Subtitle', multiline: true, defaultValue: "A curated collection of our best memories from school to current reunions." }),
      }
    }),
  },
  collections: {
    members: collection({
      label: 'Members',
      path: 'content/members/*',
      slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role/Position' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        image: fields.image({
          label: 'Photo',
          directory: 'public/images/members',
          publicPath: '/images/members/',
        }),
        facebook: fields.url({ label: 'Facebook URL' }),
        linkedin: fields.url({ label: 'LinkedIn URL' }),
        twitter: fields.url({ label: 'Twitter URL' }),
        instagram: fields.url({ label: 'Instagram URL' }),
        whatsapp: fields.url({ label: 'WhatsApp URL' }),
      },
    }),
    gallery: collection({
      label: 'Gallery',
      path: 'content/gallery/*',
      slugField: 'title',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/gallery',
          publicPath: '/images/gallery/',
          validation: { isRequired: true },
        }),
        caption: fields.text({ label: 'Caption' }),
      },
    }),
  },
});

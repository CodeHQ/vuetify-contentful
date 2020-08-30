# Contentful Vuetify Media Renderer

Vuetify renderer for the Contentful media field type.

# Getting Started

## Install

From CDN

```html
<script src="https://cdn.jsdelivr.net/npm/vuetify-contentful"></script>
```

From [npm](https://npmjs.org)

```sh
npm install vuetify-contentful
```

## Usage

### HTML

```html
<contentful-vue-media-renderer :content="content.heroImage" />
```

### Script

```sh
import ContentfulVuetifyMediaRenderer from 'vuetify-contentful';

export default {
  components: {
    ContentfulVuetifyMediaRenderer,
  },
  data() {
    return {
      content: {
        heroImage: {
          sys: {
            space: { sys: { type: 'Link', linkType: 'Space', id: 'spaceId' } },
            id: 'mediaId',
            type: 'Asset',
            createdAt: '2020-08-25T21:08:33.500Z',
            updatedAt: '2020-08-25T21:08:33.500Z',
            environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'Laptop on a desk',
            file: {
              url: '//picsum.photos/200/300',
              details: { size: 231644, image: { width: 1951, height: 1301 } },
              fileName: 'picsum.jpg',
              contentType: 'image/jpeg',
            },
          },
        },
      },
    };
  },
```
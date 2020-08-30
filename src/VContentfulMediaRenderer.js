import { VImg } from 'vuetify/lib';

export default {
  name: 'v-contentful-media-renderer',
  props: {
    content: {
      type: Object,
      default: undefined,
    },
  },
  extends: VImg,
  computed: {
    contentFullImgSrc() {
      return this.content?.fields.file.url;
    },
    contentFullImgAlt() {
      return this.content?.fields.title;
    },
    contentType() {
      return this.content?.fields.file.contentType;
    },
    mediaType() {
      return this.contentType?.split('/')[0];
    },
  },
  render(h) {
    const { src, alt, ...innerProps } = this.$options.propsData;

    return h(VImg, {
      // For some reason this isn't effective
      listeners: this.$listeners,
      props: {
        ...innerProps,
        src: this.contentFullImgSrc,
        alt: this.contentFullImgAlt,
      },
    });
  },
};

// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for blog documents */
interface BlogDocumentData {
  /**
   * Slice Zone field in *blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *blog → Slice Zone*
 *
 */
type BlogDocumentDataSlicesSlice = never;
/**
 * blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<BlogDocumentData>,
  "blog",
  Lang
>;
export type AllDocumentTypes = BlogDocument;
declare module "@prismicio/client" {
  interface CreateClient {
    (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type { BlogDocumentData, BlogDocumentDataSlicesSlice, BlogDocument, AllDocumentTypes };
  }
}
<template>
  <Layout navBg="light" navType="light">
    <div class="content">
      <GoBack v-if="showGoBack"/>

      <div class="post-title">
        <h1 class="post-title__text">{{ $page.post.title }}</h1>

        <PostMeta :post="$page.post"/>
      </div>

      <div class="post content-box">
        <div class="post__header">
          <g-image alt="Cover image" v-if="$page.post.coverImage" :src="$page.post.coverImage"/>
        </div>

        <div class="post__content" v-html="$page.post.content"/>

        <div class="post__footer">
          <PostTags :post="$page.post"/>
        </div>
      </div>

      <div class="post-comments">
        <!-- Add comment widgets here -->
      </div>

      <Author class="post-author"/>
    </div>
  </Layout>
</template>

<script>
import PostMeta from "~/components/blog/PostMeta";
import PostTags from "~/components/blog/PostTags";
import Author from "~/components/blog/Author.vue";
import GoBack from "~/components/blog/GoBack.vue";

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
    GoBack
  },
  props: {
    showGoBack: { default: true }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description
        }
      ]
    };
  }
};
</script>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    coverImage (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;

  &__text {
    font-family: Montserrat;
  }
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
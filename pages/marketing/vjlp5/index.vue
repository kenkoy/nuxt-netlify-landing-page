<template>
    <div class="post-page">
        <ThePostList :posts="posts" />
    </div>
</template>

<script>
    import ThePostList from '~/components/Base/ThePostList'

    export default {
        layout: 'default',

        components: {
            ThePostList
        },
        async asyncData() {
            const mdFiles = await require.context(
              '~/assets/content/landing-page/marketing/vjlp5/',
              true,
              /\.md$/
            );
            // add slug and path in key list of mdFiles
            const mdFilesContent = await mdFiles.keys().map(key => ({
              ...mdFiles(key),
              slug: `${key.replace(".md", "").replace("./", "")}`,
              path: 'vjlp5'
            }));
            // filter to vjlp3 templates only
            //.filter((mdFiles) => mdFiles.attributes.promo_template == 'VJLP3-NoForm')

            // return { posts: mdFilesContent.reverse(), dataMD: mdFilesContent.reverse() }
            return { posts: mdFilesContent.reverse() }
        },
        head() {
            return {
                title: 'Vera&John - The fun online casino',
                htmlAttrs: {
                  lang: 'ja',
                },
                 bodyAttrs: {
                  id: 'ja-jp',
                }
            }
        }
    };
</script>

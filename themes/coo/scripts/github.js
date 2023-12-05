hexo.extend.helper.register("request_cheatsheet", function () {
    return `https://github.com/SeanChang/HackintoshTools/issues/new?assignee=SeanChang`;
});

hexo.extend.helper.register("contributing", function () {
    return `https://github.com/SeanChang/HackintoshTools`;
});


hexo.extend.helper.register("edit_page", function () {
    let postPage = this.page['layout'] === 'post';
    let url = "https://github.com/SeanChang/HackintoshTools";
    if (postPage) {
        url += `/blob/main/source/_posts/${this.page.slug}.md`;
    }
    return url;
});
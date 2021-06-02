<template>
    <el-row id="privacyBox">
        <el-col>
            <div class="margin-top-3rem" id="contentBox">
                <VueMarkdown :source="privacyText">
                </VueMarkdown>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import Footer from '../components/NewFooter'
    import Header from '../components/NewHeader'
    import axios from 'axios'
    import VueMarkdown from 'vue-markdown'

    export default {
        name: "Privacy",
        components: {
            Header,
            Footer,
            VueMarkdown,
        },
        inject: ['setClientHeight'],
        computed: {
            privacyText() {
                return this.$store.state.privacyData
            },
        },
        data() {
            return {
                platform: 'github',
                owner: 'opensourceways',
                repo: 'app-cla-server',
                path: 'clasign_privacy_policy_20210513.md',
                langOptions: [{value: 0, label: 'Chinese'}]
            }
        },
        methods: {
            getPrivacy(platform, owner, repo, path) {
                if (!this.privacyText) {
                    let _url = '';
                    if (platform === 'gitee') {
                        _url = `https://gitee.com/api/v5/repos/${owner}/${repo}/contents/${path}`
                    } else if (platform === 'github') {
                        _url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
                    }
                    axios({
                        url: _url
                    }).then(res => {
                        let Base64 = require('js-base64').Base64;
                        let privacy = Base64.decode(res.data.content);
                        this.$store.commit('setPrivacyData', privacy)
                    })
                }
            },
            init() {
                this.$emit('getLangOptions', this.langOptions);
                localStorage.setItem('lang', this.langOptions[0].label);
                this.$emit('initHeader', this.langOptions[0].label);
                this.getPrivacy(this.platform, this.owner, this.repo, this.path);
            },
        },
        activated() {
            this.$emit('getLangOptions', this.langOptions);
            localStorage.setItem('lang', this.langOptions[0].label);
            this.$emit('initHeader', this.langOptions[0].label);
        },
        created() {
            this.init()
        },
        mounted() {
            this.setClientHeight()
        }

    }
</script>

<style scoped lang="less">
    @media screen and (min-width: 1200px) {
        #privacyBox {
            width: 1200px;
            margin: auto;
        }
    }

    #privacyBox {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    #contentBox {
        text-align: left;
        padding: 2rem;
        margin-bottom: 2rem;
        white-space: pre-wrap;
        word-wrap: break-word;
        box-shadow: 0 0 20px 10px #F3F3F3;
        border-radius: 1.25rem;
    }
</style>

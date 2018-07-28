function getTitle(vm) {
    const {
        title
    } = vm.$options
    if (title) {
        return typeof title === 'function' ?
            title.call(vm) :
            title
    }
}

function getDescription(vm) {
    const {
        description
    } = vm.$options
    if (description) {
        return typeof description === 'function' ?
            description.call(vm) :
            description
    }
}

function getKeywords(vm) {
    const {
        keywords
    } = vm.$options
    if (keywords) {
        return typeof keywords === 'function' ?
            keywords.call(vm) :
            keywords
    }
}

const serverMetaMixin = {
    created() {
        const title = getTitle(this)
        if (title) {
            this.$ssrContext.title = `${title} | zmis.me官网`
        }
        const description = getDescription(this)
        if (description) {
            this.$ssrContext.description = `${description}`
        }
        const keywords = getKeywords(this)
        if (keywords) {
            this.$ssrContext.keywords = `${keywords}`
        }
    }
}

const clientMetaMixin = {
    mounted() {
        const title = getTitle(this)
        if (title) {
            document.title = `${title} | zmis.me官网`
        }
        const description = getDescription(this)
        if (description) {
            document.description = `${description}`
        }
        const keywords = getKeywords(this)
        if (keywords) {
            document.keywords = `${keywords}`
        }
    }
}

export default process.env.VUE_ENV === 'server' ?
    serverMetaMixin :
    clientMetaMixin
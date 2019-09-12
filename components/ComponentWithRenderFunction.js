export default {
    props: {
        enable: {
            type: Boolean,
            required: true,
        }
    },

    render (h) {
        if (this.enable) {
            return this.$scopedSlots.default()
        }

        return h(
            'div',
            {
                style: { backgroundColor: 'blue' },
            },
            [ this.$scopedSlots.default() ],
        )
    }
}

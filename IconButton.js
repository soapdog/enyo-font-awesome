enyo.kind({
    name: "fa.IconButton",
    kind: "onyx.Button",
    published: {
        content: "",
        icon: "",
        spin: false,
        size: 0,
        fixedWidth: false,
        border: false,
        pull: false,
        rotation: "normal"
    },
    components: [
        {
            name: "icon",
            kind: "fa.Icon",
            spin: this.spin,
            size: this.size,
            fixedWidth: this.fixedWidth,
            border: this.border,
            pull: this.pull,
            rotation: this.rotation
        },
        {name: "content", content: this.content}
    ]
});
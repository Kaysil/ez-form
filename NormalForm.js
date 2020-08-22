class NormalForm {
    constructor() {
        this.form = {
            type: "form",
            buttons: []
        }
    }

    setTitle(title) {
        this.form.title = title
        return this
    }

    setContent(content) {
        this.form.content = content
        return this
    }

    addButton(text) {
        this.form.buttons.push({
            text: text
        })
        return this
    }
    
    addButtonWithImage(text, type, data) {
        this.form.buttons.push({
            text: text,
            image: [{
                type: type,
                data: data
            }]
        })
        return this
    }
    
    deleteButton(id) {
        delete this.form.buttons[id]
        return this
    }
}

export { NormalForm }
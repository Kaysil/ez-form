class ModalForm {
    constructor(form) {
        this.form = {
			type: "modal",
			content: []
		};
    };

    setTitle(title) {
        this.form.title = title;
        return this;
    };

    setContent(text) {
        this.form.content = text;
        return this;
    };
	
	setButton1(text) {
        this.form.button1 = text;
        return this;
    };
	
	setButton2(text) {
        this.form.button2 = text;
        return this;
    };
};

export { ModalForm }

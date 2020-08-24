class CustomForm {
    constructor(form) {
        this.form = {
			type: "custom_form",
			content: []
		};
    };

    setTitle(title) {
        this.form.title = title;
        return this;
    };

    addLabel(text) {
        this.form.content.push({
            type: "label",
            text: text
        });
        return this;
    };
	
	addToggle(text, def) {
        this.form.content.push({
            type: "toggle",
            text: text,
            "default": def ? def: false
        });
        return this;
    };
	
	addSlider(text, min, max, step, def) {
        this.form.content.push({
            type: "slider",
            text: text,
			min: min,
			max: max,
			step: step,
            "default": def ? def: 0
        });
        return this;
    };
	
	addStepSlider(text, steps, def) {
        this.form.content.push({
            type: "step_slider",
            text: text,
			steps: steps,
            "default": def ? def: 0
        });
        return this;
    };
	
	addDropdown(text, opts) {
		this.form.content.push({
			type: "dropdown",
			text: text,
			options: opts
		});
        return this;
    };
	
	addInput(text, placeholder, def) {
        this.form.content.push({
            type: "input",
            text: text,
			placeholder: placeholder ? placeholder: "",
            "default": def ? def: ""
        });
        return this;
    };
};

export { CustomForm }